require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// Import routes
const authRoute = require('./routes/auth-router');
const blogRoute = require('./routes/blog-router');
const contactRoute = require('./routes/contact-router');
const adminRoute = require('./routes/admin-router')

// Import models
const Contact = require('./models/contact-model');

// Initialize app and middleware
const app = express();
app.use(express.json());

const corsOptions = {
    origin: "https://techg1-2.vercel.app/",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));

// Debugging environment variables
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('EMAIL:', process.env.EMAIL);
console.log('SUPPORT_EMAIL:', process.env.SUPPORT_EMAIL);

// Set up Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Route to handle form submission
app.post('/api/contact', async (req, res) => {
    const { name, email, message, subject } = req.body;
    console.log('Received contact form submission:', req.body);

    const newContact = new Contact({ name, email, message, subject });

    try {
        await newContact.save();
        console.log('Contact saved to database');

        // Send email to user
        const mailOptionsUser = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Contact Form Submission Received',
            text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nBest regards,\nSupport Team`
        };

        await transporter.sendMail(mailOptionsUser);
        console.log('Email sent to user');

        // Send email to support
        const mailOptionsSupport = {
            from: process.env.EMAIL,
            to: process.env.SUPPORT_EMAIL,
            subject: 'New Contact Form Submission',
            text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptionsSupport);
        console.log('Email sent to support');

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error handling contact form submission:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Initialize routes
app.use('/api/auth', authRoute);
app.use('/api/data', blogRoute);
app.use('/api/form', contactRoute);
app.use('/api/admin', adminRoute);

// Connect to the database and start the server
const startServer = async () => {
    try {
        // Connect to the database
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to the database");

        // Start the server after the database is connected
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1); // Exit the process with failure code
    }
};

// Start the server
startServer();

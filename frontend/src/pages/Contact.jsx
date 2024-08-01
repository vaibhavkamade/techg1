import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showToast, setShowToast] = useState(false); // State for controlling Toast visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://techg1-4.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setShowToast(true);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
    <Container className='contact-container'>
      <h1 className="section-header">Contact Us</h1>
      <Row className="mt-4 g-4">
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="formName" className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="formSubject" className="form-group">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="form-group">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your message"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 123 XYZ colony</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@eduwebsite.com</p>
          <h2 className="mt-4">Follow Us</h2>
          <p className='icons'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="icon-spacing" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="icon-spacing" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon-spacing" />
            </a>
          </p>

          <h2 className="mt-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094327!2d144.95373531531593!3d-37.816279442021315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727c3f0dd69d7a!2sEducation%20Lane!5e0!3m2!1sen!2s!4v1615987473986!5m2!1sen!2s"
            className='iframe'
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </Col>
      </Row>

      {/* Toast component for success message */}
      <Toast show={showToast} onClose={() => setShowToast(false)} className="success-toast" style={{ position: 'fixed', top: '50px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
        <Toast.Header closeButton className="bg-success text-white">
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>Your message has been sent successfully!</Toast.Body>
      </Toast>
    </Container>
    </>
  );
};

export default Contact;

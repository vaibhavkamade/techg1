import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    quote:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    name: "Matt Brandon",
    title: "Freelancer",
    image:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720656000&semt=ais_user",
  },
  {
    quote:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    name: "John Larson",
    title: "Entrepreneur",
    image:
      "https://imgs.search.brave.com/sjqUjZcq4hqU39YJBPj56ntcsR0pf0xGh53CiJ05uXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDI1NzAxMDYtYzNk/NGFlYjVjMTljP2Zt/PWpwZyZ3PTMwMDAm/YXV0bz1mb3JtYXQm/Zml0PWNyb3AmcT02/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/RjhmR1poWTJWOFpX/NThNSHg4TUh4OGZE/QT0",
  },
  {
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    name: "Saul Goodman",
    title: "CEO & Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgmx-1nKlOeEobj5K_3yuGDcH2Stw8noNgA&s",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <p className="testimonial-subtitle">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-item"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-quote" style={{color:'#D5FFFF'}}>{testimonial.quote}</p>
            <div className="testimonial-author">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
                style={{ objectFit: 'cover' }}
              />
              <div >
                <h3 className="author-name" style={{color:'#D5FFFF'}}>{testimonial.name}</h3>
                <p className="author-title" style={{color:'#D5FFFF'}}>{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

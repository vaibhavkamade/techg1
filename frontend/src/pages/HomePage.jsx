import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/features/Hero';
import { Analytics1 } from '../components/features/Analytics1';
import Accordion from '../components/features/FAQaccordian';
import Testimonials from '../components/features/Testimonials';
import './Home.css'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Analytics1 />
      <div className="homecontainer1">
        <h1>Discover, Shop, and Connect with Us!</h1>
        <p>Your one-stop destination for engaging blogs, exciting shopping experiences, and easy communication.</p>
      </div>
      <section className="homeblog-section">
        <div className="blog-content">
          <div className="blog-text">
            <h2>📝 Explore Our Blog</h2>
            <p>
              Stay updated with the latest trends, insights, and tips through our diverse range of blog posts.
              From in-depth articles on current topics to helpful guides and personal stories, our blog is designed
              to inform, inspire, and entertain. Dive into our posts and join the conversation on subjects that matter to you!
            </p>
            <Link className="nav-link" to="/blogs">Read Our Blog</Link>
          </div>
          <div className="blog-image">
            {/* <img src="/src/assets/images/blog.jpg" alt="Explore Our Blog" /> */}
            <img src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg=" alt="" />
          </div>
        </div>
      </section>
      <section className="homeshop-section">
        <div className="section-content">
          <div className="section-image">
            {/* <img src="src/assets/images/ecommerce_sales_blue.png" alt="Shop the Latest Trends" /> */}
            <img src="https://media.istockphoto.com/id/531492115/vector/set-of-colorful-empty-shopping-bags-isolated-vector-illustration.jpg?s=612x612&w=0&k=20&c=ae7RjBWM_Q7E4sA1uBd69ghoze4zq2Vx6Vut1rV4tfM=" alt="" />
          </div>
          <div className="section-text">
            <h2>🛒 Shop the Latest Trends</h2>
            <p>
              Discover a curated selection of products that cater to your needs and preferences. Whether you’re looking
              for the latest fashion, tech gadgets, or unique gifts, our online store offers high-quality items at great prices.
              Shop now and find what you love!
            </p>
            <Link className="nav-link" to="/shopping">Start Shopping</Link>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="section-content">
          <div className="section-text">
            <h2>📞 Get in Touch</h2>
            <p>
              We value your feedback and inquiries. Whether you have questions about our products, need assistance,
              or simply want to connect, our team is here to help. Reach out to us through our contact form,
              and we’ll get back to you as soon as possible.
            </p>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </div>
          <div className="section-image">
            {/* <img src="/src/assets/images/vecteezy_concept_illustration_blue.png" alt="Get in Touch" /> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzncS4kD8b0dbign4qjFCi2Bb61ONtux8fqQ&s" alt="" />
          </div>
        </div>
      </section>
      <Testimonials />
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <Accordion />
      </section>
    </div>
  );
}

export default HomePage;
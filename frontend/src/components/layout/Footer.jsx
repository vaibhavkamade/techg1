import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start text-white">
        <section className="links-section">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3" style={{padding:'10px'}}>
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p><a href="#!" className="text-white">MDBootstrap</a></p>
                <p><a href="#!" className="text-white">MDWordPress</a></p>
                <p><a href="#!" className="text-white">BrandFlow</a></p>
                <p><a href="#!" className="text-white">Bootstrap Angular</a></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p><Link to='/about' className="text-white">About</Link></p>
                <p><Link to='/contact' className="text-white">Contact</Link></p>
                <p><Link to='/shopping' className="text-white">Shopping</Link></p>
                <p><Link to='/' className="text-white">Home</Link></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p><FaHome className="icon" /> New York, NY 10012, US</p>
                <p><FaEnvelope className="icon" /> info@example.com</p>
                <p><FaPhone className="icon" /> + 01 234 567 88</p>
                <p><FaPrint className="icon" /> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="text-center p-3">
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div> */}
      </footer>
      <h3 style={{textAlign:'center',color:'#02CBFF',backgroundColor:'#222529',margin:'0px',paddingBottom:'10px'}}>  © 2024 Techligence</h3>
    </div>
  );
};

export default Footer;

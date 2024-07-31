import React, { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const typedElement = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/src/assets/images/610963083219da6a0a00ccb6_Cover-Dark-2.png',
    'https://png.pngtree.com/background/20230524/original/pngtree-black-and-white-photo-of-an-antique-telephone-on-a-desk-picture-image_2706774.jpg',
    '/src/assets/images/apsis-january-6-tips-cart-shadow.jpg',
  ];
  const links = [
    '/blogs',
    '/contact',
    '/shopping',
  ];

  useEffect(() => {
    const options = {
      strings: [
        'Blog website',
        'Contact website',
        'E-commerce website',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      preStringTyped: (arrayPos) => {
        setCurrentIndex(arrayPos);
      }
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="herocontainer" style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Welcome to our Website</h1>
        <h3><span ref={typedElement}></span></h3>
        <Link to={links[currentIndex]} className="btn">
          learn more
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;

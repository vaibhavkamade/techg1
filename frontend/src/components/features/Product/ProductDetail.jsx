import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';
import {
  faHashtag,
  faCakeCandles,
  faPuzzlePiece,
  faChildren,
  faClipboard,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";

import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { images } from "../../../assets/images.js";
import ProductChar from "./ProductChar.jsx";
import { CartContext } from "../../../context/CartContext.jsx";

const ProductDetail = () => {
  const { addToCart, cart, stock } = useContext(CartContext);
  const location = useLocation();
  const { state } = location;
  const { id, name, imageSrc, description, amount, quantity, maxQuantity, GST,freeDelivery,deliveryFee } = state || {};

  if (!state) {
    return <div>No product data available.</div>;
  }

  const handleClick = () => {
    addToCart(state);
  };

  const availableStock = stock[id] !== undefined ? stock[id] : maxQuantity;
  const isAvailable = availableStock > 0;

  return (
    <>
      <div className="product-detail-container">
        <div className="left">
          <section className="above">
            <Carousel data-bs-theme="dark" interval={1500}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 carousel-image"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </section>

          <section className="below">
            <div className="item-icon" style={{ borderRight: '1px solid gray' }}>
              <span>
                <FontAwesomeIcon icon={faCakeCandles} className="fa-2x" />
              </span>
              <div>
                <h6>18+</h6>
              </div>
              <div><strong>Ages</strong></div>
            </div>
            <hr />
            <div className="item-icon" style={{ borderRight: '1px solid gray' }}>
              <span>
                <FontAwesomeIcon icon={faPuzzlePiece} className="fa-2x" />
              </span>
              <div>
                <h6>327</h6>
              </div>
              <div><strong>Pieces</strong></div>
            </div>
            <hr />
            <div className="item-icon">
              <span>
                <FontAwesomeIcon icon={faHashtag} className="fa-2x" />
              </span>
              <div>
                <h6>10369</h6>
              </div>
              <div><strong>Items</strong></div>
            </div>
          </section>
        </div>
        <div className="right">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ backgroundColor: 'yellow', fontSize: 'medium', fontWeight: '800', padding: '3px', marginRight: '10px' }}>
              New
            </span>
            <span style={{ color: isAvailable ? 'green' : 'red', fontSize: 'medium', fontWeight: '800' }}>
              {isAvailable ? 'Available' : 'Not Available'}
            </span>
          </div>
          <div>
            <h5>Plum Blossom</h5>
            <a href="/">
              <img src="https://www.lego.com/cdn/cs/set/assets/blt7c9332ed5ec6017d/icons-logo-pos-600w.png?format=png&amp;height=30&amp;dpr=1" alt="LEGO® Icons" />
            </a>
          </div>
          <div>
            <span>Warning small Parts !! </span>
            <FontAwesomeIcon icon={faChildren} className="fa-2x" />
          </div>
          <hr />
          <div>
            <FontAwesomeIcon icon={faClipboard} className='fa-2x' />
            <span> Building instructions </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
          </div>
          <hr />
          <div style={{ display: 'flex', gap: '20px' }}>
            <span><button className='btn' onClick={handleClick} disabled={!isAvailable}>Add to Cart</button></span>
            <span className="cart-icon-container">
              <Link to={`/shopping/cart`} state={{ id, name, imageSrc, description, amount, quantity, maxQuantity, GST,freeDelivery,deliveryFee }}>
                <button className="btn">
                  View Cart
                  <FontAwesomeIcon icon={faCartShopping} />
                  {cart.length > 0 && (
                    <span className="cart-count">{cart.length}</span>
                  )}
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <hr />
      <ProductChar />
    </>
  );
};

export default ProductDetail;

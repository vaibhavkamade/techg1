import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ id, name, imageSrc, description, amount, quantity, maxQuantity, GST, freeDelivery, deliveryFee }) => {
  return (
    <div className='card'>
      <img src={imageSrc} alt={name} />
      <h5>{name}</h5>
      <p>{description}</p>
      <div className='productcard-icons'>
        <div className='productcard-icons-inner'>
          <FontAwesomeIcon icon={faCakeCandles} />
          <span><h6>18+</h6></span>
        </div>
        <div className='productcard-icons-inner'>
          <FontAwesomeIcon icon={faPuzzlePiece} />
          <span><h6>400</h6></span>
        </div>
      </div>
      <Link
        to={`/shopping/${id}`}
        state={{ id, name, imageSrc, description, amount, quantity, maxQuantity, GST, freeDelivery, deliveryFee }}
        style={{ textDecoration: 'none' }}
      >
        <button className='btn'>Learn More <span> →</span> </button>
      </Link>
    </div>

    
  );
}

export default ProductCard;

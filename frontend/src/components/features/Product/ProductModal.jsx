// ProductModal.js

import React from 'react';
import Modal from 'react-modal';
import './ProductModal.css';

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, product }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      <button className="close-btn" onClick={onRequestClose}>×</button>
      <img src={product.imageSrc} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">${product.amount}</p>
      <div className="modal-btns">
        <button className="btn">Buy Now</button>
        <button className="btn">Add to Cart</button>
      </div>
    </Modal>
  );
};

export default ProductModal;

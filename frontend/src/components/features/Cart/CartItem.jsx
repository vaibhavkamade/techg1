import React, { useContext  } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import './CartItem.css';
import { CartContext } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const { removeItemFromCart, updateItemQuantity } = useContext(CartContext);

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    if(item.quantity < item.maxQuantity){
      updateItemQuantity(item.id, item.quantity + 1);
    }
  };

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  const handleClick = () =>{
    navigate(`/shopping/${item.id}`);
  }

  console.log(item.quantity);

  return (
    <div className="cart-item">
      <div className="item-details">
       
        <img src={item.imageSrc} alt={item.name} className="item-image" />
        <span className="item-name">{item.name}</span>
        
      </div>
      <div className="quantity-group">
        <Button variant="outline-secondary" className="quantity-button" onClick={handleDecrease}>-</Button>
        <FormControl value={item.quantity} readOnly className="quantity-input" />
        <Button variant="outline-secondary" className="quantity-button" onClick={handleIncrease}>+</Button>
      </div>
      <span className="item-price">₹{item.amount.toLocaleString()}</span>
      <FaTrash className='delete-button' onClick={handleRemove} />
    </div>
  );
};

export default CartItem;

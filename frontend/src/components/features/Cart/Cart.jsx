import React, { useContext } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.amount * item.quantity, 0);
  };

  const calculateGST = () => {
    return cart.reduce((total, item) => {
      const gstRate = item.GST ? item.GST : 0;
      return total + (item.amount * item.quantity * (gstRate / 100));
    }, 0);
  };

  const calculateTotal = () => {
    let subtotal = calculateSubtotal();
    const gst = calculateGST();
    const shipping = calculateShipping()
    if(shipping !== "Free shipping"){
      return parseInt(shipping) + subtotal + gst
    }
    return subtotal + gst;
  };

  const calculateShipping = () =>{
    let total = 0;
    for(let i=0 ; i < cart.length ; i++){
      if(!cart[i].freeDelivery){
        total += cart[i].deliveryFee;
      }
    }

    if(total){
      return total.toLocaleString();
    }else{
      return "Free shipping";
    }
  }

  console.log(cart);

  return (
    <>
      <div style={{marginLeft:'60px',paddingTop:'20px'}}>
        <Link to='/shopping' style={{ textDecoration: 'none', display: 'flex', gap: '10px', alignItems: 'center', color: 'black' }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#1C75BC' }} />
          <span>
            <h4 style={{ color: '#1C75BC' }}>Continue Shopping</h4>
          </span>
        </Link>
        <hr />
      </div>

      <div className='cart-container'>
        <div className="cart">
          {
            cart.length === 0 ? (
              <div className="empty-cart-message">
                <FontAwesomeIcon icon={faFaceSadTear} className="sad-face-icon" />
                <span className="message-text">
                  Oops! Your cart is empty...
                </span>
              </div>
            ) : (
              cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))
            )
          }
        </div>

        {
          cart.length > 0 && <CartTotals calculateSubtotal={calculateSubtotal} calculateGST={calculateGST} calculateTotal={calculateTotal} cart={cart} calculateShipping={calculateShipping} />
        }
      </div>

    </>
  );
};

export default Cart;

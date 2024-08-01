import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ calculateSubtotal, calculateGST, calculateTotal, cart, calculateShipping }) => {
  const subtotal = calculateSubtotal();
  const gst = calculateGST();
  const total = calculateTotal();
  const shipping = calculateShipping();
  console.log(cart);

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
  };

  const headingStyle = {
    marginBottom: '20px',
    fontSize: '24px',
  };

  const summaryStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  };

  const lastRowStyle = {
    ...rowStyle,
    borderBottom: 'none',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const valueStyle = {
    fontSize: '18px',
  };

  const totalRowStyle = {
    ...rowStyle,
    backgroundColor: '#292C34',
    color: 'white',
  };

  const totalAmountStyle = {
    ...valueStyle,
    fontWeight: 'bold',
  };

  const checkoutButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '16px',
    display: 'inline-block',
    marginTop: '20px',
  };

  const customFieldStyle = {
    marginTop: '20px',
  };

  const imgStyle = {
    borderRadius: '8px',
    width: '100%',
    height: '30px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Cart Totals</h2>
      <div style={summaryStyle}>
        <div style={rowStyle}>
          <span style={labelStyle}>Subtotal</span>
          <span style={valueStyle}>
            <span className="currency">₹</span>{subtotal.toLocaleString()}
          </span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>GST</span>
          <span style={valueStyle}>
            <span className="currency">₹</span>{gst.toLocaleString()}
          </span>
        </div>

        <div style={rowStyle}>
          <span style={labelStyle}>Shipping</span>
          <span style={valueStyle}>
            <span className="currency">₹</span>{shipping.toLocaleString()}
          </span>
        </div>

        <div style={totalRowStyle}>
          <span style={labelStyle}>Total</span>
          <span style={totalAmountStyle}>
            <span className="currency">₹</span>{total.toLocaleString()}
          </span>
        </div>
      </div>

      <div>
        <Link to={`/shopping/cart/checkout`} style={checkoutButtonStyle}>
          Proceed to checkout
        </Link>
      </div>

      <div style={customFieldStyle}>
        <div id="text-7" className="widget widget_text">
          <div className="textwidget">
            <p>
              <img
                fetchpriority="high"
                decoding="async"
                style={imgStyle}
                src="https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/07/trust-symbols_b-1024x108.jpg"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;

import React from 'react';
import './CartTotals.css';
import { Link } from 'react-router-dom';

const CartTotals = ({ calculateSubtotal, calculateGST, calculateTotal ,cart , calculateShipping}) => {
  const subtotal = calculateSubtotal();
  const gst = calculateGST();
  const total = calculateTotal();
  const Shipping = calculateShipping();
  console.log(cart);

  return (
    <div className="cart_totals">
      <h2>Cart totals</h2>
      <table className="shop_table shop_table_responsive">
        <tbody>
          <tr className="order-total">
            <th>Subtotal</th>
            <td data-title="Subtotal">
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">₹</span>{subtotal.toLocaleString()}
                </bdi>
              </span>
            </td>
          </tr>

          <tr className="order-total">
            <th>GST</th>
            <td data-title="GST">
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">₹</span>{gst.toLocaleString()}
                </bdi>
              </span>
            </td>
          </tr>

          <tr className="order-total">
            <th>Shipping</th>
            <td data-title="Shipping">
              <span className="woocommerce-Price-amount amount">
                <bdi>
                  <span className="woocommerce-Price-currencySymbol">{Shipping}</span>
                </bdi>
              </span>
            </td>
          </tr>

          <tr className="order-total"  style={{backgroundColor:'#292C34',color:'white'}}>
            <th>Total</th>
            <td data-title="Total">
              <strong>
                <span className="woocommerce-Price-amount amount">
                  <bdi>
                    <span className="woocommerce-Price-currencySymbol">₹</span>{total.toLocaleString()}
                  </bdi>
                </span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="wc-proceed-to-checkout">
        <Link to={`/shopping/cart/checkout`} className="checkout-button button alt wc-forward">
          Proceed to checkout
        </Link>
      </div>
      <div className="cart-custom-field">
        <div id="text-7" className="widget widget_text">
          <div className="textwidget">
            <p>
              <img
                fetchpriority="high"
                decoding="async"
                className="alignnone size-large wp-image-1200"
                src="https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/07/trust-symbols_b-1024x108.jpg"
                alt=""
                width="100%"
                height="100%"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;

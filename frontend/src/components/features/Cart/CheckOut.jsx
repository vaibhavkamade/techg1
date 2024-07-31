import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button, ListGroup, Card, Modal } from 'react-bootstrap';
import './CheckOut.css';
import { CartContext } from '../../../context/CartContext';

const CheckoutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPaymentModal(true);
  };

  const handlePayment = () => {
    setShowPaymentModal(false);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/shopping');
  };

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
    const subtotal = calculateSubtotal();
    const gst = calculateGST();
    const shipping = calculateShipping();
    if(shipping !== "Free Shipping") return subtotal + gst + parseInt(shipping); 
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


  const subtotal = calculateSubtotal();
  const gst = calculateGST();
  const total = calculateTotal();


  console.log(cart);

  return (
    <>
      <div className="checkout-container container mt-4">
        <Row>
          <Col md={8}>
            <h2 className="checkout-title">Billing details</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" required />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="country">
                <Form.Label>Country / Region <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Country" required defaultValue="India" disabled />
              </Form.Group>

              <Form.Group controlId="streetAddress">
                <Form.Label>Street address <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="House number and street name" required />
                <Form.Control type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="mt-2" />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="city">
                    <Form.Label>Town / City <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="state">
                    <Form.Label>State <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" required>
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="zip">
                <Form.Label>PIN Code <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="PIN Code" required />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" required />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                <Form.Control type="email" placeholder="Enter email address" required />
              </Form.Group>

              <Button variant="success" type="submit" className="mt-4 w-100">
                <i className="bi bi-lock-fill"></i> Place order
              </Button>
            </Form>
          </Col>

          <Col md={4}>
            <h2 className="checkout-title">Your order</h2>
            <div style={{ maxHeight: '270px', overflowY: 'auto' }}>
              <ListGroup>
                {cart.map(item => (
                  <ListGroup.Item key={item.id} style={{ height: '80px', display: 'flex', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <img src={item.imageSrc} style={{ height: '20%', width: '20%', objectFit: 'cover', marginRight: '10px' }} alt={item.name} />
                      <div style={{ flexGrow: 1 }}>{item.name} x {item.quantity}</div>
                      <span className="float-end" style={{ marginLeft: '10px' }}>₹{item.amount * item.quantity}</span>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <style jsx>{`
                div {
                  -ms-overflow-style: none;  /* Internet Explorer 10+ */
                  scrollbar-width: none;  /* Firefox */
                }
                div::-webkit-scrollbar { 
                  display: none;  /* Safari and Chrome */
                }
              `}</style>
            </div>

            <div style={{ position: 'sticky', top: '20px' , zIndex: 10}}>
              <Card className="mt-3" style={{ height: '20vw', padding: '10px', margin: '0 auto', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body style={{ padding: '10px',backgroundColor:'#F9F9F9' }}>
                  <Card.Text style={{ fontSize: '16px', fontWeight: '500' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong>Subtotal:</strong> ₹{subtotal}
                    </span>
                  </Card.Text>
                  <hr style={{margin:'0px'}} />
                  <Card.Text style={{ fontSize: '16px', fontWeight: '500' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong>GST:</strong> ₹{gst}
                    </span>
                  </Card.Text>
                  <hr style={{margin:'0px'}} />

                  <Card.Text style={{ fontSize: '16px', fontWeight: '500' }}>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong>Shipping:</strong> {calculateShipping()}
                    </span>
                  </Card.Text>
                  <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '10px 0' }} />
                  <Card.Text style={{ fontSize: '18px', fontWeight: '700',backgroundColor:'#292C34',color:'white',padding:'5px' }} >
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong>Total:</strong> ₹{total}
                    </span>
                  </Card.Text>
                  <img
                    fetchpriority="high"
                    decoding="async"
                    className="alignnone size-large wp-image-1200"
                    src="https://themedemo.commercegurus.com/shoptimizer-demodata/wp-content/uploads/sites/53/2018/07/trust-symbols_b-1024x108.jpg"
                    alt=""
                    style={{ maxWidth: '100%', height: '40px', marginTop: '10px',objectFit:'contain' }} // Adjust image size and margin as needed
                  />
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Placed</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your order has been placed successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Payment Options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="payment-options">
              <div className="price-summary">
                <h4>Price Summary</h4>
                <p>₹{total}</p>
              </div>
              <div className="payment-methods">
                <h5>Recommended</h5>
                <h6>UPI QR</h6>
                <img src="https://imgs.search.brave.com/0oMfTx_SlmAackisqRoBPlMfLeJ1jDOfw9txmOQMMfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2VD/OEpjLnBuZw" alt="QR Code" style={{height:'100px',width:'100px'}} />
                <p>Scan with any app</p>
                <div className="payment-options-grid">
                  
                  <div className="payment-option">
                    <h6>Netbanking</h6>
                    <div className="payment-icons">
                      <img src="https://cdn.razorpay.com/bank/HDFC.gif" alt="HDFC" style={{height:'50px' , width:'50px'}}/>
                    </div>
                  </div>
                  <div className="payment-option">
                    <h6>EMI</h6>
                    <div className="payment-icons">
                      <img src="https://cdn.razorpay.com/app/googlepay.svg" alt="EMI" style={{height:'50px' , width:'50px'}} />
                    </div>
                  </div>
                  <div className="payment-option">
                    <h6>Wallet</h6>
                    <div className="payment-icons">
                      <img src="https://cdn.razorpay.com/app/paytm.svg" alt="Paytm"  style={{height:'50px' , width:'50px'}}/>
                    </div>
                  </div>
                  <div className="payment-option">
                    <h6>Paylater</h6>
                    <div className="payment-icons">
                      <img src="https://cdn.razorpay.com/app/amazonpay.svg" alt="Paylater" style={{height:'50px' , width:'50px'}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handlePayment}>
              Proceed with Payment
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CheckoutPage;

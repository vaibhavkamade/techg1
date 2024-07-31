// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EcommercePage from './pages/EcommercePage';
import Footer from './components/layout/Footer'; // Import Footer component
import Navbar from './components/layout/Navbar';
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import Blogs from './components/blog/Blogs';
import BlogDetail from './components/blog/BlogDetail';
import Shopping from './components/features/Shopping/Shopping';
import ProductDetail from './components/features/Product/ProductDetail'
import Cart from './components/features/Cart/Cart';
import CheckoutPage from './components/features/Cart/CheckOut';
import { CartProvider } from './context/CartContext';
import Contact from './pages/Contact';
import About from './pages/About';
import { AdminLayout } from './components/admin/Admin-Layout';
import { AdminUsers } from './components/admin/Admin-Users';
import { AdminContacts } from './components/admin/Admin-Contacts';
import { AdminUpdate } from './components/admin/Admin-Update';
import { AdminBlogs } from './components/admin/Admin-Blogs';
import { AdminBlogUpdate } from './components/admin/Admin-BlogUpdate';
import { AdminBlogCreate } from './components/admin/Admin-BlogCreate';

function App() {
  return (
    <>

    <div className="app">
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<BlogDetail />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/shopping/:id' element={<ProductDetail />} /> 
          <Route path='/shopping/cart' element={<Cart/>} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path='/shopping/cart/checkout' element={<CheckoutPage/>}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/about" element={<About/>}/>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="/admin/blogs/create" element={<AdminBlogCreate />} />
            <Route path="blogs/:blogId/edit" element={<AdminBlogUpdate />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
    </div>
    
    
    </>
  );
}

export default App;

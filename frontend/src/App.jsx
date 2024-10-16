import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import Policy from './pages/Policy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import ShippingPolicy from './pages/Shipping'
import {Helmet} from 'react-helmet';

const App = () => {
  useEffect(() => {
    // Initialize the Meta Pixel
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  
    fbq('init', '840990351569535'); // Replace 'your-pixel-id-goes-here' with your actual Pixel ID
    fbq('track', 'PageView');
    }, []);

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Helmet>
        <noscript>
            {
          `<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=840990351569535&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />`
        }
        </noscript>
      </Helmet>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/Terms&Conditions' element={<Terms />} />
        <Route path='/refund' element={<Refund />} />
        <Route path='/Shipping' element={<ShippingPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

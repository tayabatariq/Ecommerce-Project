import React from 'react';
import Homepage from './customer/pages/homepage/Homepag'; // Fixed import name
import Product from './customer/components/product/Product';
import Productdetail from './customer/components/productdetails/Productdetail';
import Fotter from './customer/components/footer/Fotter'
import Navigation from './customer/components/navigation/Navigation';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import Order from './customer/components/orderpage/Order';
import Orderdetail from './customer/components/orderpage/Orderdetail';
const App = () => {
  return (
    <>
    
      {/* Navigation bar */}
      <Navigation/>
      {/* Homepage start */}
      {/* <Homepage /> */}
      {/* <Product /> */}
      {/* <Productdetail /> */}
      {/* <Cart/> */}
      {/* <Routes>
      <Route path="/" element={<Checkout />} />
    </Routes> */}
      {/* Other routes */}

    {/* <Order/> */}
    <Orderdetail/>
      {/* Footer */}
      <Fotter/>
    </>
  );
}

export default App;

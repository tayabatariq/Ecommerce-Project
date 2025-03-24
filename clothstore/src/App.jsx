import React from "react";
import Homepage from "./customer/pages/homepage/Homepag"; // Fixed import name
import Productdetail from "./customer/components/productdetails/Productdetail";

import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import Order from "./customer/components/orderpage/Order";
import Orderdetail from "./customer/components/orderpage/Orderdetail";
import CustomerRouters from "./Routers/CustomerRouters";
import Cartitem from "./customer/components/cart/Cart";
import Product from "./customer/components/product/Product";
import Navigation from "./customer/components/navigation/Navigation";
import Fotter from "./customer/components/footer/Fotter";
const App = () => {
  return (
    <>
      <div>
        <div>
        </div>
        <Routes>
          <Route path="/" element={<CustomerRouters />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/:levelOne/:levelTwo/:lavelthre"
            element={<Product/>}
          ></Route>
          <Route path="/product/:productId" element={<Productdetail/>}></Route>
          <Route path="checkout" element={<Checkout/>}></Route>
          <Route path="/account/order" element={<Order/>}></Route>
          <Route path="/account/order/:orderId" element={<Orderdetail/>}></Route>




          
        </Routes>
      </div>
    </>
  );
};

export default App;

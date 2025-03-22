import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepag from "../customer/pages/homepage/Homepag";
import Cart from "../customer/components/cart/Cart";
import Fotter from "../customer/components/footer/Fotter";
import Navigation from "../customer/components/navigation/Navigation";
import Product from "../customer/components/product/Product";
import Productdetail from "../customer/components/productdetails/Productdetail";
import Checkout from "../customer/components/checkout/Checkout";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Homepag />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:lavelthre"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<Productdetail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

      </Routes>
      {/*       
      <Productdetail />
      <Cart/>
      <Routes>
      <Route path="/" element={<Checkout />} />
    </Routes>
      <Order/>
      <Orderdetail /> */}
      {/* Footer */}
      <Fotter />
    </div>
  );
};

export default CustomerRouters;

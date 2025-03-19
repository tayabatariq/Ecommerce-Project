import React from 'react';
import Homepage from './customer/pages/homepage/Homepag'; // Fixed import name
// import Product from './customer/components/product/Product';
// import Productdetail from './customer/components/productdetails/Productdetail';
import Fotter from './customer/components/footer/Fotter'
import Navigation from './customer/components/navigation/Navigation';

const App = () => {
  return (
    <>
    
      {/* Navigation bar */}
      <Navigation/>
      {/* Homepage start */}
      <Homepage />
      {/* <Product /> */}
      {/* <Productdetail /> */}
      
      {/* Footer */}
      <Fotter/>
    </>
  );
}

export default App;

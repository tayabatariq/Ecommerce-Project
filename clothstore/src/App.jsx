import React from 'react'
import Navigation from './customer/components/navigation/Navigation'
// import Homepag from './customer/pages/homepage/Homepag'
import Footer from '../src/customer/components/footer/Fotter'
import Product from './customer/components/product/Product'

const App = () => {
  return (
    <>
    {/* navigation bar */}
    <div>
      <Navigation/>
    </div>
    {/* homepagestart */}
    {/* <Homepag/> */}
    <Product/>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default App

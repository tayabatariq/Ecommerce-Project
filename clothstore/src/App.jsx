import React from 'react'
import Navigation from './customer/components/navigation/Navigation'
import Homepag from './customer/pages/homepage/Homepag'

const App = () => {
  return (
    <>
    {/* navigation bar */}
    <div>
      <Navigation/>
    </div>
    {/* homepagestart */}
    <Homepag/>
    </>
  )
}

export default App
import React from 'react'
import Maincarosa from '../../components/Homecarosal/Maincarosa'
import Homesectioncarosal from '../../components/homesectioncarosal/Homesectioncarosal'

const Homepag = () => {
  return (
   <>
   <Maincarosa/>
   <div className='flex w-full flex-col   '>
    <Homesectioncarosal/>
    <Homesectioncarosal/>
    <Homesectioncarosal/>
    <Homesectioncarosal/>
    <Homesectioncarosal/>
    <Homesectioncarosal/>

   </div>
   </>
  )
}

export default Homepag
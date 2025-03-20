import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Maincarosaldata } from './Maincarosaldata';



const Maincarosa = () => {
const items = Maincarosaldata.map((item)=><img className='cursor-pointer w-full h-full object-cover' role='presentation' src={item.image} alt='image'/>)

    return(  
        <div  id='home'>
            <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />

        </div>
  )
};
export default Maincarosa;
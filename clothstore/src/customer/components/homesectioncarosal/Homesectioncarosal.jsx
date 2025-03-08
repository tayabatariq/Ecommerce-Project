import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomesectionCrad from '../homesectioncard/HomesectionCrad';
import { Button } from '@headlessui/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from "@mui/material";

const Homesectioncarosal = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items:5 },
    };
    const items =[1,1,1,1,1].map((item)=><HomesectionCrad/>)
  return (
    <div className=' relative px-4 lg:px-8'>
        
        <div className='relative p-5'>
        <AliceCarousel
                items={items}
                infinite
                responsive={responsive}
            />

        </div>
        <Button  className="z-50" sx={{position:"absolute",top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90deg)"}} aria-label='next'>
            <KeyboardArrowRightIcon/>
        </Button>
    </div>
  )
}

export default Homesectioncarosal
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomesectionCrad from "../homesectioncard/HomesectionCrad";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { mens_kurta } from "../../../data/Mens_kurta";

const Homesectioncarosal = () => {
    const [activeIndex,setActiveIndex]= useState(0)
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1)
  const slideNext=()=>setActiveIndex(activeIndex+1)

  const syncActiveIndex=((item)=>{setActiveIndex(item)})

  const items =  mens_kurta.slice(0,10).map((item) => <HomesectionCrad product={item} />);
  return (
    <div className=" relative  px-4 lg:px-8">
      <div className="relative mt-2  border p-5">
        
        <AliceCarousel items={items}  disableDotsControls  responsive={responsive}
        onSlideChanged={syncActiveIndex}
        activeIndex={activeIndex}
        
        />
       { activeIndex !== items.length-5 && <Button variant="contained" 
        onClick={slideNext}
        className="z-50 flex items-center justify-center"  sx={{position:"absolute",top:"8rem",left:"0rem",transform:"translateX(-50%) rotate(90deg)"}} aria-level="next">
            <KeyboardArrowRightIcon sx={{transform:" rotate(-90deg)"}}/>
        </Button>}
        <Button variant="contained" 
        onClick={slidePrev}
        
        className="z-50 flex items-center justify-center"  sx={{position:"absolute",top:"8rem",right:"-3rem",transform:"translateX(-50%) rotate(90deg)"}} aria-level="next">
            <KeyboardArrowRightIcon sx={{transform:" rotate(-90deg)"}}/>
        </Button>
      </div>
    </div>
  );
};

export default Homesectioncarosal;

import React from 'react';
import Maincarosa from '../../components/Homecarosal/Maincarosa';
import Homesectioncarosal from '../../components/homesectioncarosal/Homesectioncarosal';
import { Mens_kurta } from '../../../data/Mens_kurta'; // Import the data

const Homepag = () => {
  return (
    <>
      <Maincarosa />
      <div className='flex w-full flex-col'>
        <Homesectioncarosal data={Mens_kurta} sectionName={"Men's Kurta"}/>
        <Homesectioncarosal data={Mens_kurta} sectionName={"Men's shoes"}/>
        <Homesectioncarosal data={Mens_kurta} sectionName={"Men's shirts"} />
        <Homesectioncarosal data={Mens_kurta} sectionName={"Women's Kurta"} />
        <Homesectioncarosal data={Mens_kurta} sectionName={"Women's saree"}/>
        <Homesectioncarosal data={Mens_kurta} sectionName={"Women's Dress"}/>
      </div>
    </>
  );
};

export default Homepag;
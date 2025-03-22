import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import {  useNavigate } from "react-router-dom";

const Ordercard = () => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${7}`)} className="p-4 ml-5 shadow-lg hover:shadow-xl rounded-lg border border-gray-200 bg-white">
    <Grid container spacing={2} alignItems="center" className="flex flex-col sm:flex-row">
      {/* Product Details */}
      <Grid item xs={12} sm={6} className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-cover rounded"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
          alt="Product"
        />
        <div>
          <p className="font-medium text-gray-800">Men Slim Mid Rise Black Jeans</p>
          <p className="text-sm text-gray-500">Size: M</p>
          <p className="text-sm text-gray-500">Color: Black</p>
        </div>
      </Grid>
  
      {/* Price */}
      <Grid item xs={12} sm={2} className=" font-semibold text-gray-700 mt-4 sm:mt-0">
        ₹1099
      </Grid>
  
      {/* Delivery Status */}
      <Grid item xs={12} sm={4} className=" mt-4 sm:mt-0">
        <p className="text-green-600 font-medium flex items-center ">
          <AdjustIcon className="text-green-500 w-4 h-4 mr-1" /> Delivered On March 03
        </p>
        <p className="text-xs text-gray-500">Your Item Has Been Delivered</p>
      </Grid>
    </Grid>
  </div>
  );
};

export default Ordercard;

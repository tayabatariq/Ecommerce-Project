import { Grid } from "@mui/material";
import React from "react";
import Ordercard from "./Ordercard";


const orderStatus=[
    {label:"On the ways",value:"on_the_way"},
    {label:"Delivered",value:"Delivered"},
    {label:"Cancelled",value:"Cancelled"},
    {label:"Returned",value:"Returned"},
    {label:"On the ways",value:"on_the_way"},
    {label:"On the ways",value:"on_the_way"},


]

const Order = () => {
  return (
    <div className="px-5 lg:px-20">
    <Grid container className="flex flex-col md:flex-row">
      {/* Filter Section */}
      <Grid item xs={12} md={3} lg={2.5}>
        <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
          <h1 className="font-bold text-lg">Filter</h1>
          <div className="space-y-4 mt-10">
            <h1 className="font-semibold">ORDER STATUS</h1>
            {orderStatus.map((option) => (
              <div key={option.value} className="flex  items-center">
                <input
                  defaultValue={option.value}
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                />
                <label className="ml-3 text-sm text-gray-600" htmlFor={option.value}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Grid>

  
      {/* Order Cards Section */}
      <Grid item xs={12} md={9} lg={9} >
        <Grid>
            <div  className="space-y-5 sm:mt-3">
         { [1,1,1,1].map((item)=><Ordercard />)}

            </div>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
};

export default Order;

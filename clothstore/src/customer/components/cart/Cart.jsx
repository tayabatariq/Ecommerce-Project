import React from "react";
import Cartitem from "./Cartitem";
import { Divider } from "@mui/material";
import {  Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
        {[1,1,1].map((item)=><Cartitem />)  }
        </div>
        <div className="px-5 sticky  top-0 h-[100vh] mt-5 lg:mt-0">
        <div className="border p-2">
            <p className="uppercase font-bold opacity-60 pb-4 ">
                Price details
            </p>
            <hr />
            <div className="space-y-3  mb-5 font-semibold">
                <div className="flex justify-between pt-3 text-black">
                    <span>price </span>
                    <span className="text-green-500">€199 </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                    <span>Discount </span>
                    <span  className="text-green-500">-€19 </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                    <span>Dilivery charger </span>
                    <span className="text-green-500">Free </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                    <span className="font-bold"> Total Amount </span>
                    <span className="text-green-500">2002 </span>
                </div>

            </div>
            <Button className="w-full mt-5" sx={{bgcolor:"#9155fd",px:"2.5rem",py:".7rem",color:"white"}}> Check out</Button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;

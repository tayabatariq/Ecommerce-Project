import React from "react";

const HomesectionCrad = ({ product }) => {
  return (
    <>
      <div className="flex flex-col border border-gray-300 shadow-gray-500 justify-center items-center w-[12rem] rounded-lg shadow-lg bg-white mx-3 overflow-hidden">
        <div className="h-[10rem] w-full ">
          <img
            src={product.imageUrl}
            className="w-full h-full object-cover object-top "
            alt=""
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">{product.brand}</h3>
          <p className="mt-2 text-sm text-gray-600">{product.title}</p>
        </div>
      </div>
    </>
  );
};

export default HomesectionCrad;

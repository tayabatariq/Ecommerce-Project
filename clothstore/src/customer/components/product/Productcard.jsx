import React from 'react'
import './productcard.css'

const Productcard = ({Product}) => {
  return (
    <>
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
<img src={Product.imageUrl} className='w-full h-full object-cover object-left-top' alt="" />
      </div>
      <div className='textpart bg-white p-3 '>
<div>
  <p className='font-bold opacity-60'>{Product.brand}</p>
  <p> {Product.title}</p>
</div>
<div className='flex items-start justify-start gap-3'>
<p className='font-semibold'>{Product.discountedPrice}</p>
<p className='line-through opacity-50'>{Product.price}</p>
<p className='text-green-600 font-semibold'>{Product.discountPersent}%off</p>
</div>
      </div>

    </div>
    </>
  )
}

export default Productcard
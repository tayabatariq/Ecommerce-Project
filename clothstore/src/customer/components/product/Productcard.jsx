import React from 'react'
import './productcard.css'

const Productcard = () => {
  return (
    <>
    <div className='productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem]'>
<img src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/p/z/m/38-wjn-1205n-gy-glossia-original-imagmf7kcq7gyj23.jpeg?q=70" alt="" />
      </div>
      <div className='textpart bg-white p-3 '>
<div>
  <p className='font-bold opacity-60'>Universalsolufit</p>
  <p> Causal puff sleeves solid women white top</p>
</div>
<div className='flex items-start justify-start gap-3'>
<p className='font-semibold'>$199</p>
<p className='line-through opacity-50'>$1999</p>
<p className='text-green-600 font-semibold'> 70%off</p>
</div>
      </div>

    </div>
    </>
  )
}

export default Productcard
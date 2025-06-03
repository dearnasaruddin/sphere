import React from 'react'
import { ImStarFull } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div>
      <div className='px-13 pt-24.5 pb-9.5  bg-white shadow-[0px_4px_24px_-1px_#00000014] rounded-2xl relative'>
        <div className='size-12 flex justify-center items-center border border-[#595959] rounded-full bg-black absolute top-7 right-7.5'><FaRegHeart className='text-white text-xl'/></div>
        <img src="images/arrivalProduct.webp" alt="arrivalProduct.webp" />
      </div>
      <h3 className='flex justify-between items-center font-extrabold text-2xl leading-[130%] text-[#2C2C2C] mt-9.5'>Xiphone 14 Pro Maxe <span>$175.00</span></h3>
      <p className='max-w-95 mt-5 mb-4 font-normal leading-[155%] text-lg text-black'>Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
      <div className='flex gap-x-2.5 items-center'>
        <div className="flex items-center gap-x-0.5 text-[#04A904]">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </div>
        <span className='font-normal leading-[155%] text-lg text-black'>(121)</span>
      </div>
      <button className='flex items-center gap-x-2.5 py-4 px-9 rounded-[52px] border mt-5 font-medium text-base leading-[130%] text-black'><MdShoppingCart /><span>Add to Cart</span></button>
    </div>
  )
}

export default ProductCard
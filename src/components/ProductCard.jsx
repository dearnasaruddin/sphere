import React from 'react'
import { ImStarFull } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ title = "Title", price = "000.00", quantity = "00", flashSale = false, originalPrice = "IDR 000.00", discount = "00" }) => {
  return (
    <div>

      <div className={`${flashSale ? "pt-23.5 pb-8" : "pt-24.5 pb-9.5"} px-13 bg-white shadow-[0px_4px_24px_-1px_#00000014] rounded-2xl relative`}>
        {flashSale ?
          <div className='flex justify-center items-center absolute top-14 right-7.5'>
            <span className='absolute font-montserrat font-bold text-lg leading-[115%] text-black'>{discount}% Off</span>
            <img src="images/zigzagShape.png" alt="zigzagShape.png" />
          </div>
          :
          <div className='size-12 flex justify-center items-center border border-[#595959] rounded-full bg-black absolute top-7 right-7.5'><FaRegHeart className='text-white text-xl' /></div>
        }
        <img src={flashSale ? "images/flashSaleProduct.webp" : "images/arrivalProduct.webp"} alt={flashSale ? "flashSaleProduct.webp" : "arrivalProduct.webp"} />
        {flashSale &&
          <div>
            <h3 className='flex justify-center items-center gap-x-2.5 font-montserrat font-bold text-[26px] leading-[120%] text-[#0177FC] mt-4'>${price} <span className='font-medium text-sm line-through text-[#9A9A9A]'>{originalPrice}</span></h3>
          </div>
        }
      </div>

      <h3 className={`${!flashSale && "flex justify-between items-center"} font-montserrat font-extrabold text-2xl leading-[130%] text-[#2C2C2C] mt-9.5`}>{title} {!flashSale && <span>${price}</span>}</h3>
      <p className='max-w-95 mt-5 mb-4 font-montserrat font-normal leading-[155%] text-lg text-black'>Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
      <div className='flex gap-x-2.5 items-center'>
        <div className="flex items-center gap-x-0.5 text-[#04A904] text-xl">
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </div>
        <span className='font-montserrat font-normal leading-[155%] text-lg text-black'>({quantity})</span>
      </div>

      <button className='flex items-center gap-x-2.5 py-4 px-9 rounded-[52px] border mt-5 font-montserrat font-medium text-base leading-[130%] text-black'><MdShoppingCart className='text-lg'/><span>Add to Cart</span></button>
    </div>
  )
}

export default ProductCard
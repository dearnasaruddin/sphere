import React from 'react'
import { CiSearch } from "react-icons/ci";

const FooterTop = () => {
    return (
        <div className='flex items-center justify-between bg-[#212736] pt-15.5 pb-19 pl-18 pr-13 rounded-[20px]'>
            <div className='relative'>
                <h4 className='max-w-118 font-prompt font-bold text-[46px] leading-[120%] -tracking-[2%] text-white mb-4'>Gateway to a world of innovation with</h4>
                <img src="images/logoWhite.png" alt="logoWhite.png" />
                <img className='absolute top-37 left-103' src="images/starShape.svg" alt="starShape.svg" />
            </div>
            <div className='font-montserrat px-6 pt-8 pb-3 rounded-[20px] bg-[#EFF0F1]'>
                <div className='relative'>
                    <CiSearch className='absolute top-1/2 -translate-y-1/2 left-0 text-3xl text-[#01081A]' />
                    <input className='w-full font-light text-xl pl-15.5 text-[#01081A] focus:outline-none' type="text" placeholder='Search for electronic' /> <br />
                </div>
                <button className='font-medium text-lg text-center py-3 px-61 mt-6 rounded-[14px] text-black bg-[#ACE238]' type="button">Search</button>
            </div>
        </div>
    )
}

export default FooterTop
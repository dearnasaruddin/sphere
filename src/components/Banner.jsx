import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='h-162 bg-[#F3F4F6]'>
            <Link to={'#'}>
                <img src="images/banner.webp" alt="banner.webp" className='h-full mx-auto object-contain' />
            </Link>
        </div>
    )
}

export default Banner
import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { LuArrowRight } from "react-icons/lu";

const Navbar = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between py-12.5 font-montserrat font-semibold text-sm text-[#8E8E8E] uppercase">
                    <div>
                        <Link to={'#'}>
                            <img src="images/logo.png" alt="logo.png" />
                        </Link>
                    </div>
                    <ul className='flex items-center gap-x-6.5 leading-[130%]'>
                        <li><Link to={'#'} className='p-4 hover:text-primary duration-300'>Home</Link></li>
                        <li><Link to={'#'} className='p-4 hover:text-primary duration-300'>Pricing</Link></li>
                        <li><Link to={'#'} className='p-4 hover:text-primary duration-300'>Events</Link></li>
                        <li><Link to={'#'} className='p-4 hover:text-primary duration-300'>Company</Link></li>
                    </ul>
                    <ul className='flex items-center gap-x-6 leading-[130%]'>
                        <li><Link to={'#'} className='p-4 hover:text-primary duration-300'>LOGIN</Link></li>
                        <li><Link to={'#'} className='flex gap-x-2.5 items-center normal-case font-medium text-base py-4 px-9.5 bg-black text-white rounded-[52px]'>Sign Up Now<LuArrowRight className='text-lg'/></Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
import React from 'react'
import FooterTop from './FooterTop'
import Container from '../Container'
import { Link } from 'react-router-dom'
import PhoneIcon from '../icons/phoneIcon'
import { BiSolidEnvelope } from "react-icons/bi";

const Footer = () => {
    return (
        <footer className='mt-26'>
            <Container>
                <div>
                    <FooterTop />
                    <div className='mt-18 pb-17'>
                        <div className='flex gap-x-37 font-montserrat font-normal text-lg text-black'>
                            <div className='pb-1.5'>
                                <Link>
                                    <img src="images/footerLogo.png" alt="footerLogo.png" />
                                </Link>
                                <p className='max-w-95 leading-[155%] mt-14'>Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
                            </div>
                            <div className='flex gap-x-17.5'>
                                <div>
                                    <h5 className='font-extrabold text-[22px]'>Company</h5>
                                    <ul className='mt-3 flex flex-col gap-y-3'>
                                        <li>
                                            <Link to={'#'} className='leading-[160%] hover:text-primary duration-300'>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={'#'} className='leading-[160%] hover:text-primary duration-300'>Products Digital</Link>
                                        </li>
                                        <li>
                                            <Link to={'#'} className='leading-[160%] hover:text-primary duration-300'>Customer Reviews</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className='font-extrabold text-[22px]'>Information</h5>
                                    <ul className='mt-3 flex flex-col gap-y-3'>
                                        <li>
                                            <Link to={'#'} className='leading-[160%] hover:text-primary duration-300'>Help Center</Link>
                                        </li>
                                        <li>
                                            <Link to={'#'} className='leading-[160%] hover:text-primary duration-300'>Payment Methods</Link>
                                        </li>
                                        <li>
                                            <Link to={'#'} className='leading-[160%] hover:text-primary duration-300'>Return & Refund</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className='font-extrabold text-[22px]'>Contact</h5>
                                    <ul className='mt-6 flex flex-col gap-y-6'>
                                        <li>
                                            <Link to={'tel:(+1) 123-456-7890'} className='iconParent flex items-center gap-x-2.5 leading-[160%] hover:text-primary duration-300'><PhoneIcon/><span>(+1) 123-456-7890</span></Link>
                                        </li>
                                        <li>
                                            <Link to={'mailto:email@youremail.com'} className='flex items-center gap-x-2.5 leading-[160%] hover:text-primary duration-300'><BiSolidEnvelope  className='text-[23px]'/><span>email@youremail.com</span></Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
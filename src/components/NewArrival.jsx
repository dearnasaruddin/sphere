import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'

const NewArrival = () => {
    return (
        <div className='pt-26.5'>
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className='font-prompt font-bold text-5xl leading-[125%] -tracking-[2%] text-center text-black'>New <span className='text-primary'>arrival</span> for you</h2>
                    <ul className='flex gap-x-6'>
                        <li><Link className='size-14 flex justify-center items-center rounded-full border hover:border-none hover:bg-[#AFE638] duration-300'><LuArrowLeft className='text-2xl'/></Link></li>
                        <li><Link className='size-14 flex justify-center items-center rounded-full border hover:border-none hover:bg-[#AFE638] duration-300'> <LuArrowRight className='text-2xl'/> </Link></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default NewArrival
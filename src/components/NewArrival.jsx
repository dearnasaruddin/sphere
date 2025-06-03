import React, { useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import ProductCard from './ProductCard'

const NewArrival = () => {

    const [activeCategory, setActiveCategory] = useState("mobile")

    // ===== Dammy Data =======
    const productData = [
        {
            id: 1,
            title: "Xiphone 14 Pro Maxe",
            price: "175.00",
            quantity: "121",
        },
        {
            id: 2,
            title: "Xiphone 13",
            price: "100.00",
            quantity: "89",
        },
    ]

    return (
        <div className='pt-26.5'>
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className='font-prompt font-bold text-5xl leading-[125%] -tracking-[2%] text-center text-black'>New <span className='text-primary'>arrival</span> for you</h2>
                    <ul className='flex gap-x-6'>
                        <li><Link className='size-14 flex justify-center items-center rounded-full border hover:border-none hover:bg-[#AFE638] duration-300'><LuArrowLeft className='text-2xl' /></Link></li>
                        <li><Link className='size-14 flex justify-center items-center rounded-full border hover:border-none hover:bg-[#AFE638] duration-300'> <LuArrowRight className='text-2xl' /> </Link></li>
                    </ul>
                </div>
                <div className="flex gap-x-19 mt-11.5 font-montserrat">

                    {/* =========== Category list =========== */}
                    <ul className='flex flex-col gap-y-9 whitespace-nowrap font-medium text-lg text-[#2C2C2C] leading-[130%] pl-6 mt-11 relative after:absolute after:h-76 after:w-0.5 after:rounded-sm after:-top-4.5 after:left-0  after:bg-[#E2E2E2]'>
                        <li onClick={() => setActiveCategory("computer")} className={activeCategory === "computer" ? "relative after:absolute after:z-10 after:-left-6 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-11 after:rounded-sm after:bg-primary" : "hover:text-primary duration-300"}>
                            <Link>Computer & Laptop<span className='ml-4.5 text-base font-bold py-1.5 px-3 text-[#EDEDEF] bg-[#1F2537] rounded-lg'>15</span></Link>
                        </li>
                        <li onClick={() => setActiveCategory("mobile")} className={activeCategory === "mobile" ? "relative after:absolute after:z-10 after:-left-6 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-11 after:rounded-sm after:bg-primary" : "hover:text-primary duration-300"}>
                            <Link>Mobile & Phone<span className='ml-4.5 text-base font-bold py-1.5 px-3 text-[#1F2537] bg-[#AFE638] rounded-lg'>35</span></Link>
                        </li>
                        <li onClick={() => setActiveCategory("camera")} className={activeCategory === "camera" ? "relative after:absolute after:z-10 after:-left-6 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-11 after:rounded-sm after:bg-primary" : "hover:text-primary duration-300"}>
                            <Link>Camera Imaging<span className='ml-4.5 text-base font-bold py-1.5 px-3 text-[#EDEDEF] bg-primary rounded-lg'>10</span></Link>
                        </li>
                        <li onClick={() => setActiveCategory("tv")} className={activeCategory === "tv" ? "relative after:absolute after:z-10 after:-left-6 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-11 after:rounded-sm after:bg-primary" : "hover:text-primary duration-300"}>
                            <Link>TV & Smart Box<span className='ml-4.5 text-base font-bold py-1.5 px-3 text-[#1F2537] bg-[#F1F1F2] rounded-lg'>8</span></Link>
                        </li>
                        <li onClick={() => setActiveCategory("appliance")} className={activeCategory === "appliance" ? "relative after:absolute after:z-10 after:-left-6 after:top-1/2 after:-translate-y-1/2 after:w-0.5 after:h-11 after:rounded-sm after:bg-primary" : "hover:text-primary duration-300"}>
                            <Link>Home Appliance<span className='ml-4.5 text-base font-bold py-1.5 px-3 text-[#1F2537] bg-[#FFE921] rounded-lg'>2</span></Link>
                        </li>
                    </ul>

                    {/* =========== Product Card =========== */}
                    <div className='flex items-center gap-x-24.5'>
                        {productData.map((item)=>(
                        <ProductCard key={item.id} title={item.title} price={item.price} quantity={item.quantity}/>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewArrival
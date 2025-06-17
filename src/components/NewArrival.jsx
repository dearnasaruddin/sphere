import React, { useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import ProductCard from './ProductCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`custom-arrow ${className}`}
            style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "transparent", borderRadius: '50%', border:'1px solid black', width: '56px', height: '56px', zIndex:'10', position:'absolute', top: '-104px' , right: '13px' }}
            onClick={onClick}
        ><LuArrowRight className='text-2xl' /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`custom-arrow ${className}`}
            style={{ ...style, display: "flex", justifyContent: 'center', alignItems: 'center', background: "transparent", borderRadius: '50%', border:'1px solid black', width: '56px', height: '56px', zIndex:'10', position:'absolute', top: '-104px', right: '93px' }}
            onClick={onClick}
        ><LuArrowLeft className='text-2xl' /></div>
    );
}

const NewArrival = () => {

    const [activeCategory, setActiveCategory] = useState("mobile")

    // ===== Dammy Data =======
    const productData = [
        {
            id: 1,
            title: "Xiphone 14 Pro Maxe",
            price: "175.00",
            totalRating: "121",
        },
        {
            id: 2,
            title: "Xiphone 13",
            price: "100.00",
            totalRating: "89",
        },
        {
            id: 3,
            title: "Xiphone 15 Pro",
            price: "190.00",
            totalRating: "76",
        }

    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className='pt-26.5'>
            <Container>
                <div className="flex justify-between items-center">
                    <h2 className='font-prompt font-bold text-5xl leading-[125%] -tracking-[0.94px] text-center text-black'>New <span className='text-primary'>arrival</span> for you</h2>
                </div>
                <div className="flex gap-x-12 mt-11.5 font-montserrat">

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
                    <div className='w-238 h-166.5'>
                        <Slider className='newArrivalSlider' {...settings}>
                            {productData.map((item, index) => (
                                <ProductCard key={item.id} width='410px' title={item.title} price={item.price} totalRating={item.totalRating} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewArrival
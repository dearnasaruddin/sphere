import React from 'react'
import Container from './Container'
import ProductCard from './ProductCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const FlashSale = () => {

    const flashSaleData = [
        {
            id: 1,
            title: "Xpad Mini 6",
            price: "89.000",
            originalPrice: "IDR 150.00",
            discount: "8",
            totalRating: "125"
        },
        {
            id: 2,
            title: "Hypermac Air Purpler M1",
            price: "89.000",
            originalPrice: "IDR 150.00",
            discount: "8",
            totalRating: "125"
        },
        {
            id: 3,
            title: "AR10 AC 1PK with S-Inverter",
            price: "90.000",
            originalPrice: "IDR 250.00",
            discount: "13",
            totalRating: "125"
        },
    ]

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
        <div className='mt-24'>
            <Container>
                <div className='relative'>
                    <h3 className='font-prompt font-bold text-5xl leading-[125%] -tracking-[0.94px] text-black mb-16'>Flash sale for <span className='text-primary'>best</span> sellers</h3>
                    <img className='absolute -top-2 right-22 z-10' src="images/flashSaleShape.svg" alt="flashSaleShape.svg" />
                    <div className='w-full h-167'>
                        <Slider className='flashSaleSlider' {...settings}>
                            {
                                flashSaleData.map((item) => (
                                    <ProductCard key={item.id} flashSale={true} title={item.title} totalRating={item.totalRating} price={item.price} originalPrice={item.originalPrice} discount={item.discount} width='400px' />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FlashSale
import React from 'react'
import Container from './Container'
import ProductCard from './ProductCard'

const FlashSale = () => {

    const flashSaleData = [
        {
            id: 1,
            title: "Xpad Mini 6",
            price: "89.000",
            originalPrice: "IDR 150.00",
            discount: "8",
            quantity: "125"
        },
        {
            id: 2,
            title: "Hypermac Air Purpler M1",
            price: "89.000",
            originalPrice: "IDR 150.00",
            discount: "8",
            quantity: "125"
        },
        {
            id: 3,
            title: "AR10 AC 1PK with S-Inverter",
            price: "90.000",
            originalPrice: "IDR 250.00",
            discount: "13",
            quantity: "125"
        },
    ]

    return (
        <div className='mt-24'>
            <Container>
                <div className='relative'>
                    <h3 className='font-prompt font-bold text-5xl leading-[125%] -tracking-[20%] text-black mb-16'>Flash sale for <span className='text-primary'>best</span> sellers</h3>
                    <img className='absolute -top-2 right-22 z-10' src="images/flashSaleShape.svg" alt="flashSaleShape.svg" />
                    <div className='flex items-center justify-between'>
                        {
                            flashSaleData.map((item) => (
                                <ProductCard key={item.id} flashSale={true} title={item.title} quantity={item.quantity} price={item.price} originalPrice={item.originalPrice} discount={item.discount} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FlashSale
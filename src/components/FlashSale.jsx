import React from 'react'
import Container from './Container'
import ProductCard from './ProductCard'

const FlashSale = () => {
    return (
        <div className='mt-24'>
            <Container>
                <div className='relative'>
                    <h3 className='font-prompt font-bold text-5xl leading-[125%] -tracking-[20%] text-black mb-16'>Flash sale for <span className='text-primary'>best</span> sellers</h3>
                    <img className='absolute -top-2 right-22 z-10' src="images/flashSaleShape.svg" alt="flashSaleShape.svg" />
                    <div className='flex items-center justify-between'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FlashSale
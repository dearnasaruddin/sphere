import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const OfferSection = () => {
    return (
        <Container>
            <div className='flex flex-wrap mt-21 gap-x-4.5 gap-y-5'>
                <div>
                    <Link to={'#'}>
                        <img src="images/offerOne.webp" alt="offerOne.webp" />
                    </Link>
                </div>
                <div>
                    <Link to={'#'}>
                        <img src="images/offerTwo.webp" alt="offerTwo.webp" />
                    </Link>
                </div>
                <div>
                    <Link to={'#'}>
                        <img src="images/offerThree.webp" alt="offerThree.webp" />
                    </Link>
                </div>
                <div>
                    <Link to={'#'}>
                        <img src="images/offerFour.webp" alt="offerFour.webp" />
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default OfferSection
import React from 'react'
import Container from './Container'

const Categories = () => {

    const categoriesData = [
        {
            id: 1,
            title: "Computer & Laptop",
            imgLink: "images/iconImg/computer.svg"
        },
        {
            id: 2,
            title: "Mobile & Phone",
            imgLink: "images/iconImg/mobile.svg"
        },
        {
            id: 3,
            title: "Camera",
            imgLink: "images/iconImg/camera.svg"
        },
        {
            id: 4,
            title: "TV & Smart Box",
            imgLink: "images/iconImg/tv.svg"
        },
        {
            id: 5,
            title: "Home Appliance",
            imgLink: "images/iconImg/ac.svg"
        },
        {
            id: 6,
            title: "Accessories",
            imgLink: "images/iconImg/speaker.svg"
        },
        {
            id: 7,
            title: "Other Categories",
            imgLink: "images/iconImg/console.svg"
        },
    ]

    return (

        <Container>
            <div className='pt-26 relative'>
                <h2 className='font-prompt font-extrabold text-[74px] leading-[125%] -tracking-[2%] text-center text-black mb-13'>What <span className='text-primary'>we</span> provide?</h2>
                <img className='absolute z-10 right-8.5 top-21' src="images/shapeRight.svg" alt="shapeRight.svg" />
                <img className='absolute z-10 -left-25 top-17.5' src="images/shapeLeft.svg" alt="shapeLeft.svg" />
                <div className='flex justify-between'>
                    {categoriesData.map((item) => (

                        <div key={item.id}>
                            <div className="size-21.5 mx-auto flex justify-center items-center rounded-full bg-white shadow-[0px_4px_24px_-1px_#00000014]">
                                <img src={item.imgLink} alt={item.title} />
                            </div>
                            <p className="mt-6 max-w-29.5 font-montserrat font-medium text-lg leading-[130%] text-center text-[#2C2C2C]">{item.title}</p>
                        </div>

                    ))}
                </div>
            </div>
        </Container>

    )
}

export default Categories
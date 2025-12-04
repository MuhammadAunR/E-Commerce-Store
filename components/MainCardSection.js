import Image from 'next/image'
import React from 'react'

const MainCardSection = () => {

    const images = [
        { path: '/model-1.jpg', alt: 'Model', name: 'Model', price: '230' },
        { path: '/model-1.jpg', alt: 'Model', name: 'Model', price: '230' },
        { path: '/model-1.jpg', alt: 'Model', name: 'Model', price: '230' },
        { path: '/model-1.jpg', alt: 'Model', name: 'Model', price: '230' },
        { path: '/model-1.jpg', alt: 'Model', name: 'Model', price: '230' },
    ]

    return (
        <>
            <main className='px-16 my-10 py-10'>
                <div className='uppercase text-6xl font-body font-extrabold text-center py-10'>
                    New Arrivals
                </div>
                <section className='flex justify-center gap-x-5 gap-y-7 flex-wrap'>
                    {images.slice(0, 4).map((item, index) => {

                        return (
                            <div key={index} className="card hover:bg-secondary/50 transition-colors ease-in-out rounded-xl">
                                <div className='ring-1 ring-primary/50 w-[300px] rounded-xl overflow-hidden'>
                                    <Image src={item.path} alt={item.alt} width={400} height={400} className='hover:scale-105 transition-transform ease-in-out duration-500' />
                                </div>
                                <div className='px-2 py-2'>
                                    <div className="name font-semibold">{item.name}</div>
                                    <div className="rating">Rating*****</div>
                                    <div className="price text-lg font-bold">${item.price}</div>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center my-10'>View All</button>

                <div className='w-full bg-primary/30 h-px my-10'></div>
            </main>
        </>
    )
}

export default MainCardSection

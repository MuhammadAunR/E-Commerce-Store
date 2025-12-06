import Image from 'next/image'
import React from 'react'
import StarRating from './StarRating';

const MainCardSection = () => {
    const images = [
        { path: '/model-1.jpg', alt: 'Denim Jacket', name: 'Denim Jacket', price: '89' },
        { path: '/model-1.jpg', alt: 'Slim Fit Tee', name: 'Slim Fit Tee', price: '29' },
        { path: '/model-1.jpg', alt: 'Urban Hoodie', name: 'Urban Hoodie', price: '65' },
        { path: '/model-1.jpg', alt: 'Casual Shirt', name: 'Casual Shirt', price: '45' },
        { path: '/model-1.jpg', alt: 'Classic Polo', name: 'Classic Polo', price: '39' },
    ];

    const images2 = [
        { path: '/model-2.jpg', alt: 'Leather Jacket', name: 'Leather Jacket', price: '120' },
        { path: '/model-2.jpg', alt: 'Crewneck Sweater', name: 'Crewneck Sweater', price: '55' },
        { path: '/model-2.jpg', alt: 'Oversized Tee', name: 'Oversized Tee', price: '32' },
        { path: '/model-2.jpg', alt: 'Linen Shirt', name: 'Linen Shirt', price: '48' },
        { path: '/model-2.jpg', alt: 'Summer Shorts', name: 'Summer Shorts', price: '35' },
    ];



    return (
        <>
            <main className='px-7 md:px-16 py-10'>

                {/* New Arrivals */}
                <div className='uppercase text-6xl font-body font-extrabold text-center py-20'>
                    New Arrivals
                </div>
                <section className='flex justify-center gap-x-5 gap-y-7 flex-wrap'>
                    {images.slice(0, 4).map((item, index) => {
                        return <div key={index} className="card hover:bg-secondary/50 transition-colors ease-in-out rounded-xl">
                            <div className='ring-1 ring-primary/50 w-[300px] rounded-xl overflow-hidden'>
                                <Image src={item.path} alt={item.alt} width={400} height={400} className='hover:scale-105 transition-transform ease-in-out duration-500' />
                            </div>
                            <div className='px-2 py-2'>
                                <div className="name font-semibold">{item.name}</div>
                                <div className="rating"><StarRating /></div>
                                <div className="price text-lg font-bold">${item.price}</div>
                            </div>
                        </div>
                    })}
                </section>
                <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center my-10'>View All</button>

                <div className='w-full bg-primary/30 h-px'></div>


                {/* Top Selling  */}
                <div className='uppercase text-6xl font-body font-extrabold text-center py-20'>
                    Top Selling
                </div>
                <section className='flex justify-center gap-x-5 gap-y-7 flex-wrap'>
                    {images2.slice(0, 4).map((item, index) => {
                        return <div key={index} className="card hover:bg-secondary/50 transition-colors ease-in-out rounded-xl">
                            <div className='ring-1 ring-primary/50 w-[300px] rounded-xl overflow-hidden'>
                                <Image src={item.path} alt={item.alt} width={400} height={400} className='hover:scale-105 transition-transform ease-in-out duration-500' />
                            </div>
                            <div className='px-2 py-2'>
                                <div className="name font-semibold">{item.name}</div>
                                <div className="rating"><StarRating /></div>
                                <div className="price text-lg font-bold">${item.price}</div>
                            </div>
                        </div>
                    })}
                </section>
                <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center my-10'>View All</button>

                <div className='w-full bg-primary/30 h-px my-10'></div>
            </main>
        </>
    )
}

export default MainCardSection

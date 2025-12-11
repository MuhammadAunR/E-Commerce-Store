import React from 'react'
import ProductCard from './ProductCard';

const MainCardSection = () => {
    const images = [
        { path: '/model-1.jpg', alt: 'Denim Jacket', name: 'Denim Jacket', price: '89' },
        { path: '/model-1.jpg', alt: 'Slim Fit Tee', name: 'Slim Fit Tee', price: '29' },
        { path: '/model-1.jpg', alt: 'Urban Hoodie', name: 'Urban Hoodie', price: '65' },
        { path: '/model-1.jpg', alt: 'Casual Shirt', name: 'Casual Shirt', price: '45' },  
    ];

    const images2 = [
        { path: '/model-2.jpg', alt: 'Leather Jacket', name: 'Leather Jacket', price: '120' },
        { path: '/model-2.jpg', alt: 'Crewneck Sweater', name: 'Crewneck Sweater', price: '55' },
        { path: '/model-2.jpg', alt: 'Oversized Tee', name: 'Oversized Tee', price: '32' },
        { path: '/model-2.jpg', alt: 'Linen Shirt', name: 'Linen Shirt', price: '48' },
    ];



    return (
        <>
            <main className='px-7 md:px-16 pb-10'>

                {/* New Arrivals */}
                <div className='uppercase text-6xl font-body font-extrabold text-center pb-10'>
                    New Arrivals
                </div>
                <section className='flex justify-center gap-5 flex-wrap'>
                    <ProductCard images={images} />
                </section>
                <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center my-10'>View All</button>

                <div className='w-full bg-primary/30 h-px'></div>


                {/* Top Selling  */}
                <div className='uppercase text-6xl font-body font-extrabold text-center py-10'>
                    Top Selling
                </div>
                <section className='flex justify-center gap-5 flex-wrap'>
                    <ProductCard images={images2} />
                </section>
                <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center my-10'>View All</button>

                <div className='w-full bg-primary/30 h-px my-10'></div>
            </main>
        </>
    )
}

export default MainCardSection

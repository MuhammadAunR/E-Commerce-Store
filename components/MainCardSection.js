import React from 'react'
import ProductCard from './ProductCard';

const MainCardSection = () => {
    const images = [
        { path: '/t-shirt-5.jpeg', alt: 'AeroSoft Tee', name: 'AeroSoft Tee', price: '34' },
        { path: '/jeans-1.jpeg', alt: 'Vintage Blue Jeans', name: 'Vintage Blue Jeans', price: '55' },
        { path: '/hoodie-3.jpeg', alt: 'UrbanCore Hoodie', name: 'UrbanCore Hoodie', price: '70' },
        { path: '/jacket-2.png', alt: 'WindBreaker Pro', name: 'WindBreaker Pro', price: '125' },

    ];

    const images2 = [
        { path: '/t-shirt-4.jpeg', alt: 'MetroFit Tee', name: 'MetroFit Tee', price: '31' },
        { path: '/jeans-5.jpeg', alt: 'FlexStretch Jeans', name: 'FlexStretch Jeans', price: '59' },
        { path: '/hoodie-4.jpeg', alt: 'CloudSoft Hoodie', name: 'CloudSoft Hoodie', price: '68' },
        { path: '/jacket-1.png', alt: 'AeroShield Jacket', name: 'AeroShield Jacket', price: '110' },
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

'use client'
import React, { useContext } from 'react'
import ProductCard from './ProductCard';
import { ProductContext } from './ProductProvider';
import Link from 'next/link';


const MainCardSection = () => {

    const products = useContext(ProductContext)

    return (
        <>
            <main className='px-7 md:px-16 pb-10'>

                {/* New Arrivals */}
                <section className='flex flex-col items-center'>

                    <div className='uppercase text-6xl font-body font-extrabold text-center pb-10'>
                        New Arrivals
                    </div>
                    <section className='flex justify-center gap-5 flex-wrap'>
                        {products.slice(0, 5).map(item => {
                            return <ProductCard key={item.id} product={item} />
                        })}
                    </section>
                    <Link href={'/shop'}>
                        <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center my-10'>View All</button>
                    </Link>

                </section>

                <div className='w-full bg-primary/30 h-px'></div>


                {/* Top Selling  */}
                <section className='flex flex-col items-center'>

                    <div className='uppercase text-6xl font-body font-extrabold text-center py-10'>
                        Top Selling
                    </div>

                    <section className='flex justify-center gap-5 flex-wrap'>
                        {products.slice(1, 6).map(item => {
                            return <ProductCard key={item.id} product={item} />
                        })}
                    </section>

                    <Link href={'/shop'}>
                        <button className='outline-none ring-1 ring-primary/40 rounded-full px-10 py-2 cursor-pointer hover:bg-secondary transition-colors flex ease-in-out mt-10'>View All</button>
                    </Link>

                </section>

                <div className='w-full bg-primary/30 h-px my-10'></div>
            </main>
        </>
    )
}

export default MainCardSection

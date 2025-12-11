'use client'
import ProductCard from '@/components/ProductCard'
import { SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const Shop = () => {
    const images = [
        { path: '/t-shirt-1.jpeg', alt: 'Summer Shorts', name: 'Summer Shorts', price: '35' },
        { path: '/t-shirt-2.jpeg', alt: 'Denim Jacket', name: 'Denim Jacket', price: '89' },
        { path: '/t-shirt-2.jpeg', alt: 'Urban Hoodie', name: 'Urban Hoodie', price: '65' },
        { path: '/t-shirt-1.jpeg', alt: 'Oversized Tee', name: 'Oversized Tee', price: '32' },
        { path: '/t-shirt-2.jpeg', alt: 'Casual Shirt', name: 'Casual Shirt', price: '45' },
        { path: '/t-shirt-2.jpeg', alt: 'Classic Polo', name: 'Classic Polo', price: '39' },
        { path: '/t-shirt-1.jpeg', alt: 'Linen Shirt', name: 'Linen Shirt', price: '48' },
        { path: '/t-shirt-2.jpeg', alt: 'Slim Fit Tee', name: 'Slim Fit Tee', price: '29' },
        { path: '/t-shirt-2.jpeg', alt: 'Slim Fit Tee', name: 'Slim Fit Tee', price: '29' },
    ];

    const [toggleFilters, setToggleFilters] = useState(false)
    const [applyFilter, setApplyFilter] = useState('Filters')
    const [category, setCategory] = useState('All Products')
    const [categoryValue, setCategoryValue] = useState()


    const handleChange = (e) => {
        setCategoryValue(e.target.value)
    }
    const handleToggleFilter = () => {
        setToggleFilters(!toggleFilters)
        if (toggleFilters) {
            setApplyFilter('Filters')
            setCategory(categoryValue)
        }
        else
            setApplyFilter('Apply')
    }

    return (
        <>
            <main className="min-h-screen px-16">
                <section className="mt-7">

                    <header className='flex justify-between items-center'>
                        <div>
                            <h1 className="font-body text-3xl font-semibold"> {category} </h1>
                            <h3>Showing {images.length} of {images.length} products</h3>
                        </div>
                        <div className=''>
                            <button onClick={handleToggleFilter} className='outline-none ring-1 ring-primary/40 rounded-full px-7 py-2 cursor-pointer hover:bg-secondary transition-colors ease-in-out flex justify-self-center items-center gap-2 my-10 font-semibold'>
                                <SlidersHorizontal size={20} />
                                {applyFilter}
                            </button>
                        </div>
                    </header>

                    <div className={`bg-primary/10 flex flex-col gap-4 rounded-2xl ${toggleFilters ? "h-72 p-7" : "h-px p-0"} transition-all ease-in-out duration-300`}>
                        <h3 className={`text-xl font-bold font-body ${toggleFilters ? "block" : "hidden"}`}>Categories</h3>

                        <div className={`flex flex-col gap-2 ${toggleFilters ? "block" : "hidden"}`}>
                            <label htmlFor="product-all" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="product-all" name="product" value={'All Products'} onClick={handleChange} />
                                All Products
                            </label>

                            <label htmlFor="product-t-shirt" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="product-t-shirt" name="product" value={'T-Shirts'} onClick={handleChange} />
                                T-Shirts
                            </label>

                            <label htmlFor="product-jeans" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="product-jeans" name="product" value={'Jeans'} onClick={handleChange} />
                                Jeans
                            </label>

                            <label htmlFor="product-hoodies" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="product-hoodies" name="product" value={'Hoodies'} onClick={handleChange} />
                                Hoodies
                            </label>

                            <label htmlFor="product-jackets" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="product-jackets" name="product" value={'Jackets'} onClick={handleChange} />
                                Jackets
                            </label>

                            <label htmlFor="product-casual" className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="product-casual" name="product" value={'Casual'} onClick={handleChange} />
                                Casual
                            </label>
                        </div>
                    </div>

                        <Link href={'product'} className="flex justify-between gap-5 flex-wrap py-10">
                            <ProductCard images={images} />
                        </Link>

                </section>
            </main>

        </>
    )
}

export default Shop

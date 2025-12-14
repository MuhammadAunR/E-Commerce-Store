'use client'
import ProductCard from '@/components/ProductCard'
import { SlidersHorizontal } from 'lucide-react';
import React, { useState } from 'react'

const Shop = () => {
    const images = [
        { path: '/t-shirt-1.jpeg', alt: 'Streetline Tee', name: 'Streetline Tee', price: '37' },
        { path: '/t-shirt-2.jpeg', alt: 'Urban Classic Tee', name: 'Urban Classic Tee', price: '29' },
        { path: '/t-shirt-3.jpeg', alt: 'PrimeFlex Shirt', name: 'PrimeFlex Shirt', price: '42' },
        { path: '/t-shirt-4.jpeg', alt: 'MetroFit Tee', name: 'MetroFit Tee', price: '31' },
        { path: '/t-shirt-5.jpeg', alt: 'AeroSoft Tee', name: 'AeroSoft Tee', price: '34' },

        { path: '/jeans-1.jpeg', alt: 'Vintage Blue Jeans', name: 'Vintage Blue Jeans', price: '55' },
        { path: '/jeans-2.jpeg', alt: 'Dark Wash Slim Jeans', name: 'Dark Wash Slim Jeans', price: '62' },
        { path: '/jeans-3.jpeg', alt: 'Urban Rider Jeans', name: 'Urban Rider Jeans', price: '48' },
        { path: '/jeans-4.jpeg', alt: 'Classic Fit Denim', name: 'Classic Fit Denim', price: '52' },
        { path: '/jeans-5.jpeg', alt: 'FlexStretch Jeans', name: 'FlexStretch Jeans', price: '59' },

        { path: '/hoodie-1.jpeg', alt: 'Cosmic Hoodie', name: 'Cosmic Hoodie', price: '72' },
        { path: '/hoodie-2.jpeg', alt: 'ThermoFleece Hoodie', name: 'ThermoFleece Hoodie', price: '65' },
        { path: '/hoodie-3.jpeg', alt: 'UrbanCore Hoodie', name: 'UrbanCore Hoodie', price: '70' },
        { path: '/hoodie-4.jpeg', alt: 'CloudSoft Hoodie', name: 'CloudSoft Hoodie', price: '68' },
        { path: '/hoodie-5.jpeg', alt: 'FrostWave Hoodie', name: 'FrostWave Hoodie', price: '75' },
        { path: '/hoodie-6.jpeg', alt: 'NeoStreet Hoodie', name: 'NeoStreet Hoodie', price: '69' },
        { path: '/hoodie-7.jpeg', alt: 'GlideWear Hoodie', name: 'GlideWear Hoodie', price: '73' },

        { path: '/jacket-1.png', alt: 'AeroShield Jacket', name: 'AeroShield Jacket', price: '110' },
        { path: '/jacket-2.png', alt: 'WindBreaker Pro', name: 'WindBreaker Pro', price: '125' },
        { path: '/jacket-3.png', alt: 'PolarGuard Jacket', name: 'PolarGuard Jacket', price: '118' },
        { path: '/jacket-4.png', alt: 'NightRider Jacket', name: 'NightRider Jacket', price: '134' },
    ];


    const [toggleFilters, setToggleFilters] = useState(false)
    const [applyFilter, setApplyFilter] = useState('Filters')
    const [category, setCategory] = useState()
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
            <main className="min-h-screen px-16 bg-secondary">
                <section className="mt-5">

                    <header className='flex justify-between items-center'>
                        <div>
                            <h1 className="font-body text-3xl font-semibold"> {category || 'All Products'}  </h1>
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

                    <div href={'product'} className="flex justify-between gap-y-7 gap-x-3 flex-wrap py-10">
                        <ProductCard images={images} />
                    </div>

                </section>
            </main>

        </>
    )
}

export default Shop

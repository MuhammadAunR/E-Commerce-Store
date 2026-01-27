'use client'
import ProductCard from '@/components/ProductCard'
import { ProductContext } from '@/components/ProductProvider';
import { SlidersHorizontal } from 'lucide-react';
import React, { useContext, useState } from 'react'



const Shop = () => {

    const [toggleFilters, setToggleFilters] = useState(false)
    const [applyFilter, setApplyFilter] = useState('Filters')
    const [category, setCategory] = useState()
    const [categoryValue, setCategoryValue] = useState()

    const products = useContext(ProductContext)

    function handleChange(e) {
        setCategoryValue(e.target.value);
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
                            <h3>Showing {products.length} products</h3>
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

                    <div className="flex justify-center gap-y-7 gap-x-5 flex-wrap py-10">
                        {products.map(item => {
                            return <ProductCard key={item.id} product={item} />
                        })}
                    </div>

                </section>
            </main>

        </>
    )
}

export default Shop

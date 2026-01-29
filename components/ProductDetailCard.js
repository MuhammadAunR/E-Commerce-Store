"use client"
import React, { useContext, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { CartContext } from './CartProvider'

const ProductDetailCard = ({ product }) => {
    const [itemCount, setItemCount] = useState(1)

    const desc = product?.des ? product.des[0].children[0].text : null;
    const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL;
    const category = product.category.title;

    // console.log(strapiURL + product.image.url)

    const { addToCart } = useContext(CartContext)


    const increaseItems = () => {
        if (itemCount) {
            setItemCount(itemCount + 1)
        }
    }
    const decreaseItems = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    }
    return (
        <>
            <main className='bg-secondary px-8 sm:px-16'>

                <section className='ProductDetails py-10 flex items-center justify-around gap-x-3 gap-y-10 w-full xl:w-10/12 mx-auto max-lg:flex-col'>

                    <div className='ProductImages flex flex-col xl:flex xl:flex-row gap-3 w-1/2 max-lg:flex-row max-lg:w-full max-lg:mx-auto'>
                        <div className='w-[400px] h-[500px] relative overflow-hidden rounded-xl ring-1 ring-primary/30'>
                            <Image src={strapiURL + product.image.url} alt={product.title} fill unoptimized='false' loading='lazy' className='object-cover' />
                        </div>
                    </div>

                    <div className='ProductDetails w-1/2 flex flex-col gap-7 max-lg:w-full max-lg:justify-center'>

                        <div className='flex flex-col gap-7 max-lg:gap-3'>
                            <h2 className='font-body font-bold text-3xl sm:text-4xl uppercase'>{product.title}</h2>
                            <h3 className='font-body font-extrabold text-2xl sm:text-3xl'>${product.price}</h3>
                            <p className='font-body font-semibold sm:text-lg text-primary/50'>{desc}</p>
                            <div>
                                <h4 className='font-body font-semibold sm:text-lg text-primary/50'>Category :</h4>
                                <p className='font-body font-semibold text-primary/50 cursor-pointer'>{category}</p>
                            </div>
                        </div>

                        <div className='w-full h-px bg-primary/10'></div>

                        <div className="Purchase flex justify-between gap-4 max-sm:flex-col max-sm:items-center">
                            <div className='flex gap-7 items-center justify-center bg-primary/10 py-2 w-1/2 sm:w-1/3 rounded-full px-2'>
                                <button onClick={() => decreaseItems()} className='bg-primary/15 rounded-full hover:scale-110 transition-transform ease-in-out cursor-pointer'><Minus /></button>
                                <span>{itemCount}</span>
                                <button onClick={() => increaseItems()} className='bg-primary/15 rounded-full hover:scale-110 transition-transform ease-in-out cursor-pointer'><Plus /></button>
                            </div>
                            <button onClick={() => addToCart(product, itemCount)} className='bg-primary text-white hover:bg-primary/80 rounded-full transition-colors ease-in-out duration-300 w-full sm:w-10/12 py-2 cursor-pointer'>Add to Cart</button>
                        </div>

                        <div className='w-full h-px bg-primary/10'></div>

                        <div className='flex gap-2'>
                            <p className='font-body font-semibold text-lg text-primary/50'>Share :</p>
                            <div className='flex gap-2 items-center text-gray-600 cursor-pointer'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg>
                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </>
    )
}

export default ProductDetailCard

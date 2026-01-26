"use client"
import React, { useState } from 'react'
import StarRating from '@/components/StarRating'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'

const ProductDetailCard = ({ product }) => {
    const [itemCount, setItemCount] = useState(0)

    const desc = product?.des ? product.des[0].children[0].text : null;
    const imageSrc = product?.image[0].url ? process.env.NEXT_PUBLIC_STRAPI_URL + product.image[0].url : null;
    const variants = product?.variants ? product?.variants : [];
    const colors = product?.variants[0] ? product?.variants[0].color : null;
    // console.log('Here is : ', stock)

    const increaseItems = (stock) => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1)
        }
    }
    const decreaseItems = () => {
        if (itemCount > 0) setItemCount(itemCount - 1)
    }
    return (
        <>
            <main className='bg-secondary px-16'>

                <section className='ProductDetails py-10 flex items-center justify-around gap-3 w-full'>

                    <div className='ProductImages flex flex-col xl:flex xl:flex-row gap-3 w-1/2'>
                        <div className='flex gap-6 xl:flex-col'>
                            <div className='w-30 h-[150px] relative overflow-hidden rounded-lg  ring-1 ring-primary/30'>
                                <Image src={imageSrc} alt={product.title} fill unoptimized className='object-cover hover:scale-105 transition-transform ease-in-out' />
                            </div>
                            <div className='w-30 h-[150px] relative overflow-hidden rounded-lg  ring-1 ring-primary/30'>
                                <Image src={imageSrc} alt={product.title} fill unoptimized className='object-cover hover:scale-105 transition-transform ease-in-out' />
                            </div>
                            <div className='w-30 h-[150px] relative overflow-hidden rounded-lg  ring-1 ring-primary/30'>
                                <Image src={imageSrc} alt={product.title} fill unoptimized className='object-cover hover:scale-105 transition-transform ease-in-out' />
                            </div>
                        </div>
                        <div className='w-[400px] h-[500px] relative overflow-hidden rounded-xl ring-1 ring-primary/30'>
                            <Image src={imageSrc} alt={product.title} fill unoptimized className='object-cover' />
                        </div>
                    </div>

                   
                            <div className='ProductDetails w-1/2 flex flex-col gap-7'>

                                <div className='flex flex-col gap-1'>
                                    <h2 className='font-body font-bold text-4xl uppercase'>{product.title}</h2>
                                    <StarRating />
                                    <h3 className='font-body font-extrabold text-2xl'>${product.price}</h3>
                                    <p className='font-body font-semibold text-primary/50'>{desc}</p>
                                </div>

                                <div className='w-full h-px bg-primary/10'></div>

                                <div className="ProductColors flex flex-col gap-2">
                                    <h5 className='text-primary/50'>Choose Color</h5>
                                    <label htmlFor="color" className='flex gap-3'>
                                        <div id='color' className={`bg-black w-10 h-10 rounded-full hover:scale-110 transition-transform ease-in-out`}></div>
                                        <div id='color' className='bg-black w-10 h-10 rounded-full hover:scale-110 transition-transform ease-in-out'></div>
                                        <div id='color' className='bg-fuchsia-300 w-10 h-10 rounded-full hover:scale-110 transition-transform ease-in-out'></div>
                                    </label>
                                </div>

                                <div className='w-full h-px bg-primary/10'></div>

                                <div className="Size flex flex-col gap-3">
                                    <h5 className='text-primary/50'>Choose Size</h5>

                                    <div className='flex gap-5'>
                                        <button id='size' className='bg-primary/10 rounded-3xl px-4 py-1 hover:bg-primary hover:text-white transition-colors ease-in-out duration-300'>Small</button>
                                        <button id='size' className='bg-primary/10 rounded-3xl px-4 py-1 hover:bg-primary hover:text-white transition-colors ease-in-out duration-300'>Medium</button>
                                        <button id='size' className='bg-primary/10 rounded-3xl px-4 py-1 hover:bg-primary hover:text-white transition-colors ease-in-out duration-300'>Large</button>
                                        <button id='size' className='bg-primary/10 rounded-3xl px-4 py-1 hover:bg-primary hover:text-white transition-colors ease-in-out duration-300'>X-Large</button>
                                    </div>
                                </div>

                                <div className='w-full h-px bg-primary/10'></div>

                                <div className="Purchase flex justify-between gap-4">
                                    <div className='flex gap-7 items-center justify-center bg-primary/10 py-2 w-1/3 rounded-full'>
                                        <button onClick={() => decreaseItems()} className='bg-primary/15 rounded-full hover:scale-110 transition-transform ease-in-out cursor-pointer'><Minus /></button>
                                        <span>{itemCount}</span>
                                        <button onClick={() => increaseItems()} className='bg-primary/15 rounded-full hover:scale-110 transition-transform ease-in-out cursor-pointer'><Plus /></button>
                                    </div>
                                    <button className='bg-primary text-white hover:bg-primary/80 rounded-full transition-colors ease-in-out duration-300 w-10/12 cursor-pointer'>Add to Cart</button>
                                </div>

                            </div>
                  
                </section>

            </main>
        </>
    )
}

export default ProductDetailCard

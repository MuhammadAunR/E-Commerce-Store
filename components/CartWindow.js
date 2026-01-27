'use client'
import { CircleX, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartWindow = ({ isOpen, onClose }) => {

    return (
        <>
            <section className={`fixed top-0 z-10 w-full h-screen bg-black/25 transform transition-transform duration-300 ease-linear ${isOpen ? 'translate-x-0' : 'translate-x-400'}`}>
                <aside className={`fixed top-0 right-0 z-10 w-96 h-screen bg-gray-200`}>
                    <div className='flex items-center justify-between p-4'>
                        <h3 className='uppercase text-2xl font-semibold'>Shopping Cart</h3>
                        <CircleX onClick={onClose} className='hover:rotate-180 transition-transform ease-linear cursor-pointer' />
                    </div>
                    <div className='w-full h-px bg-primary'></div>

                    {/* Cart Product Card  */}
                    <section className='flex gap-7 bg-slate-200 py-3 px-5'>
                        <div>Image</div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <h3>Name</h3>
                                <CircleX size={16} className='hover:rotate-90 transition-transform ease-linear cursor-pointer' />
                            </div>
                            <p>Price</p>
                        </div>
                    </section>

                    <div className='flex flex-col gap-3 justify-center items-center transform translate-y-30'>
                        <ShoppingCart size={112} color='gray' />
                        <p className='italic text-xl text-gray-600'>No Products in the cart.</p>
                        <Link href={'/shop'} className=''>
                            <button onClick={onClose} className='bg-primary text-white hover:bg-primary/80 rounded-full py-3 transition-colors ease-in-out duration-300 w-50 cursor-pointer'>Go to Shop</button>
                        </Link>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default CartWindow

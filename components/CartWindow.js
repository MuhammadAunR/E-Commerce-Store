'use client'
import { CircleX, ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import React, { useContext } from 'react'
import { CartContext } from './CartProvider'
import Image from 'next/image'

const CartWindow = ({ isOpen, onClose }) => {

    const { items, removeFromCart } = useContext(CartContext)
    const strapiURL = process.env.NEXT_PUBLIC_STRAPI_URL;

    return (
        <>
            <section className={`fixed top-0 z-10 w-full h-screen bg-black/25 transform transition-transform ease-linear ${isOpen ? 'translate-x-0' : 'translate-x-400'}`}>
                <aside className={`fixed top-0 right-0 z-10 w-96 h-screen bg-gray-200`}>
                    <div className='flex items-center justify-between p-4'>
                        <h3 className='uppercase text-2xl font-bold'>Shopping Cart</h3>
                        <CircleX onClick={onClose} className='hover:rotate-180 transition-transform ease-linear cursor-pointer' />
                    </div>
                    <div className='w-full h-px bg-primary'></div>

                    {/* Cart Product Card  */}
                    <section className='h-145 overflow-y-scroll'>
                        {items.map((items, i) => {
                            return <div key={i} className='flex gap-5 bg-gray-100 py-3 px-5 my-1'>
                                <div className='rounded-full overflow-hidden'>
                                    <Image src={strapiURL + items.image} alt={items.title} width={50} height={50} unoptimized />
                                </div>
                                <div className='flex flex-col text-lg w-full'>
                                    <div className='flex items-center justify-between gap-3'>
                                        <h3 className='font-semibold'>{items.title}</h3>
                                        <div onClick={() => removeFromCart(items)}>
                                            <X size={16} color='red' className='hover:rotate-90 transition-transform ease-linear cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <p>{items.quantity} x </p>
                                        <p className='text-red-500'> ${(items.price) * items.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        })}

                        {items.length === 0 && <div className='flex flex-col gap-3 justify-center items-center transform translate-y-30'>
                            <ShoppingCart size={112} color='gray' />
                            <p className='italic text-xl text-gray-600'>No Products in the cart.</p>
                            <Link href={'/shop'} className=''>
                                <button onClick={onClose} className='bg-primary text-white hover:bg-primary/80 rounded-full py-3 transition-colors ease-in-out duration-300 w-50 cursor-pointer'>Go to Shop</button>
                            </Link>
                        </div>}
                    </section>

                    <section className='flex flex-col gap-5'>
                        <div className='w-full h-px bg-primary'></div>
                        <div className='flex items-center justify-between px-4'>
                            <h3 className='font-semibold text-2xl'>Grand Total</h3>
                            <p className='font-semibold text-red-500 text-xl'>Price</p>
                        </div>
                        <button className='bg-primary text-white hover:bg-primary/80 rounded-full py-3 transition-colors ease-in-out duration-300 w-50 cursor-pointer transform translate-x-5'>Checkout</button>
                    </section>
                </aside>
            </section>
        </>
    )
}

export default CartWindow

import { Menu, Search, ShoppingCart, UserRound } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='flex items-center justify-between py-7 max-w-[1600px] mx-auto px-16'>

                <section className='flex items-center justify-between gap-10'>
                    <div className='lg:hidden'><Menu strokeWidth={3} /></div>
                    <div className="logo text-3xl font-black uppercase font-heading ">Shop.CO</div>
                    <div className='flex items-center list-none gap-7 text-lg font-body max-lg:hidden'>
                        <li className='cursor-pointer'>Shop</li>
                        <li className='cursor-pointer'>On Site</li>
                        <li className='cursor-pointer'>New Arrival</li>
                        <li className='cursor-pointer'>Brands</li>
                    </div>
                </section>

                <section className='flex items-center justify-between gap-5'>
                    <div className='relative'>
                        <input
                            type="text"
                            placeholder='Search for products...'
                            className='bg-secondary text-primary/60 text-md font-body outline-none rounded-3xl pl-10 py-2 max-sm:w-[30px] sm:w-[180px] md:w-60 lg:w-[300px] xl:w-[500px] transition-all duration-300 ease-in-out' />
                        <Search className='absolute top-2 left-2 text-primary/50' />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div><ShoppingCart /></div>
                        <div className='ring-2 ring-primary rounded-full'><UserRound /></div>
                    </div>
                </section>
            </nav>
        </>
    )
}

export default Navbar

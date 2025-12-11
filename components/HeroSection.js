import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <>
            <main className='max-w-[1600px] mx-auto'>
                <section className='flex items-stretch font-body px-16 bg-secondary max-lg:flex max-lg:flex-col max-sm:px-7'>
                    <div className='flex flex-col gap-5 pt-20 pb-10 w-1/2 max-lg:w-full'>
                        <h1 className='font-extrabold text-6xl max-sm:text-5xl uppercase'>Find Clothes <br /> that matches <br /> your style</h1>
                        <p className='w-10/12'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <Link href={'/shop'}>
                            <button className='bg-primary text-white px-7 py-3 rounded-full w-48 hover:tracking-widest transition-all ease-in-out'>Shop Now</button>
                        </Link>
                        <div className='flex space-x-16 space-y-3 max-xl:flex-wrap'>
                            <div>
                                <div className='text-4xl font-bold'>200+</div>
                                <span className='font-light'>International Brands</span>
                            </div>
                            <div>
                                <div className='text-4xl font-bold'>2,000+</div>
                                <span className='font-light'>International Brands</span>
                            </div>
                            <div>
                                <div className='text-4xl font-bold'>30,000+</div>
                                <span className='font-light'>International Brands</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <Image
                            src="/hero-section.png"
                            alt="Hero-Image"
                            width={800}
                            height={1000}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </section>

                <div className='flex items-center justify-around max-xl:flex-wrap gap-5 bg-primary text-5xl text-white py-7 uppercase font-heading font-extrabold'>
                    <div>Versace</div>
                    <div>Zara</div>
                    <div>Gucci</div>
                    <div>Prada</div>
                    <div>Calvin-Klein</div>
                </div>
            </main>
        </>
    )
}

export default HeroSection

import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <>
            <main className='max-w-[1600px] mx-auto'>
                <section className='flex items-center font-body px-16 bg-secondary h-[75vh]'>
                    <div className='flex flex-col gap-5 w-1/2'>
                        <h1 className='font-extrabold text-6xl uppercase'>Find Clothes <br /> that matches <br /> your style</h1>
                        <p className='w-10/12'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='bg-primary text-white px-7 py-3 rounded-full w-48 hover:tracking-widest transition-all ease-in-out'>Shop Now</button>
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
                    <div className="pt-9">
                        <Image
                            src="/hero-section.png"
                            alt="Hero-Image"
                            width={800}
                            height={0}
                            // className="w-full max-w-[988px] h-auto"
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

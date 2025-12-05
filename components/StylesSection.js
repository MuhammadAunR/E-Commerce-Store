import Image from 'next/image'
import React from 'react'

const StylesSection = () => {
    return (
        <>
            <main className='px-16'>
                <section className='bg-secondary h-fit py-7 rounded-2xl'>
                    <div className='uppercase text-5xl lg:text-6xl font-body font-extrabold text-center py-10 max-md:px-7'>Browse by dress style</div>
                    <div className="flex flex-col gap-4 px-7 md:px-20">
                        <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-[1fr_2fr] gap-4 ">
                            <div className="bg-white rounded-lg h-64 overflow-hidden relative">
                                <span className='absolute top-5 left-5 font-bold font-body text-3xl z-10'>Casual</span>
                                <Image
                                    src="/casual-dressing.jpg"
                                    alt="Casual Dressing"
                                    fill
                                    className="object-cover w-full h-full transition-transform hover:scale-105 ease-in-out"
                                />
                            </div>
                            <div className="bg-white rounded-lg h-64 overflow-hidden relative">
                                <span className='absolute top-5 left-5 font-bold font-body text-3xl z-10'>Formal</span>
                                <Image
                                    src="/formal-dressing.jpg"
                                    alt="Formal Dressing"
                                    fill
                                    className="object-cover w-full h-full transition-transform hover:scale-105 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-[2fr_1fr] gap-4">
                            <div className="bg-white rounded-lg h-64 overflow-hidden relative">
                                <span className='absolute top-5 left-5 font-bold font-body text-3xl z-10'>Party</span>
                                <Image
                                    src="/party-dressing.jpg"
                                    alt="Party Dressing"
                                    fill
                                    className="object-cover w-full h-full transition-transform hover:scale-105 ease-in-out"
                                />
                            </div>
                            <div className="bg-white rounded-lg h-64 overflow-hidden relative">
                                <span className='absolute top-5 left-5 font-bold font-body text-3xl z-10'>Gym</span>
                                <Image
                                    src="/gym-dressing.jpg"
                                    alt="Gym Dressing"
                                    fill
                                    className="object-cover w-full h-full transition-transform hover:scale-105 ease-in-out object-bottom"
                                />
                            </div>
                        </div>
                    </div>



                </section>
            </main>
        </>
    )
}

export default StylesSection

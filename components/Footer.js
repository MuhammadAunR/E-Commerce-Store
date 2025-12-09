'use client'
import { ArrowLeft, ArrowRight, Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import React, { useState } from 'react'
import ReviewCardCarousel from './ReviewCardCarousel'
import Link from 'next/link'

const Footer = () => {

    const customerReviews = [
        {
            name: "Hassan Raza",
            review: "The quality genuinely surprised me. The stitching feels durable and the material is soft without losing structure. Delivery was quick too, which made the whole experience smooth."
        },
        {
            name: "Ayesha Noor",
            review: "I&apos;m really happy with my purchase. The fitting was exactly as shown in the size chart and the fabric feels premium. Honestly didn&apos;t expect it to look this good in person."
        },
        {
            name: "Bilal Ahmed",
            review: "Overall a solid product. The only thing I noticed was a slight shade difference, but the design and comfort easily make up for it. Definitely something I&apos;d wear often."
        },
        {
            name: "Maria Shaikh",
            review: "Customer support was super responsive. I had a sizing question and they guided me perfectly. The product arrived well-packed and in perfect condition. Really happy with the service."
        },
        {
            name: "Zain Malik",
            review: "The style is clean and modern — exactly what I was looking for. It feels comfortable even after hours of wear. Considering the price, the quality is honestly impressive."
        },
        {
            name: "Sana Farooq",
            review: "Everything from the packaging to the feel of the fabric was on point. It looks even better than the photos. You can tell effort was put into the details, which I really appreciate."
        }
    ];

    const [current, setCurrent] = useState(0)
    const cardToShow = 3;
    const maxIndex = customerReviews.length - cardToShow;

    const next = () => {
        if (current < maxIndex) setCurrent(current + 1)
    }

    const prev = () => {
        if (current > 0) setCurrent(current - 1)
    }

    return (
        <>
            <main>
                {/* Customer Review Section  */}
                <section className=''>
                    <div className='flex items-baseline justify-between px-7 md:px-16 mt-10'>
                        <div className='uppercase text-4xl md:text-5xl lg:text-6xl font-body font-extrabold'>Our Happy Customers</div>
                        <div className='flex gap-2 bg-secondary py-1 px-3 rounded-2xl'>
                            <ArrowLeft
                                onClick={prev}
                                disabled={current === 0}
                                className={`p-1 rounded-full bg-white border border-gray-200 transition-all 
                                    ${current === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:-translate-x-0.5'
                                    }`} />
                            <ArrowRight
                                onClick={next}
                                disabled={current === maxIndex}
                                className={`p-1 rounded-full bg-white border border-gray-200 transition-all 
                                    ${current === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:translate-x-0.5'
                                    }`} />
                        </div>
                    </div>

                    {/* Card Carousel Section */}
                    <div className='mb-30'>
                        <ReviewCardCarousel current={current} customerReviews={customerReviews} />
                    </div>

                    {/* Footer Section */}

                    <footer className="bg-secondary relative">
                        {/* Newsletter Section - Overlapping */}
                        <section className="absolute left-1/2 -translate-x-1/2 -top-20 w-[90%] max-w-6xl">
                            <div className="bg-black rounded-3xl py-8 md:py-10 px-6 md:px-12 lg:px-16">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                                    <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl uppercase text-center lg:text-left">
                                        Stay Upto Date About<br className="hidden lg:block" /> Our Latest Offers
                                    </h3>
                                    <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[350px]">
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className="w-full bg-white outline-none rounded-full pl-12 pr-4 py-3 text-sm"
                                            />
                                        </div>
                                        <button className="w-full bg-white hover:bg-primary hover:text-white hover:ring-1 ease-in-out duration-300 cursor-pointer transition-colors rounded-full py-3 text-sm font-medium">
                                            Subscribe to Newsletter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Main Footer Content */}
                        <div className="pt-46 md:pt-50 pb-8 px-4 md:px-8 lg:px-16">
                            <div className="max-w-7xl mx-auto">
                                {/* Footer Grid */}
                                <div className="grid grid-cols-1 lg:grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 mb-8">
                                    {/* Brand Section */}
                                    <div className="max-lg:px-5">
                                        <h2 className="font-black text-3xl md:text-4xl uppercase mb-4">Shop.Co</h2>
                                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                            We have clothes that suits your style and which you're proud to wear. From women to men.
                                        </p>
                                        <div className="flex gap-3">
                                            <Link target='_blank' href={'https://www.linkedin.com/in/muhammad-aun-rasheed-45a177301/'}>
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                                    <Linkedin className="w-5 h-5" />
                                                </div>
                                            </Link>
                                            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                                <Facebook className="w-5 h-5" />
                                            </div>
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                                <Instagram className="w-5 h-5" />
                                            </div>
                                            <Link target='_blank' href={'https://github.com/MuhammadAunR'}>
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                                                    <Github className="w-5 h-5" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-1 space-y-4 md:grid md:grid-cols-2'>
                                        <div className='flex justify-around'>
                                            <div>
                                                <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Company</h3>
                                                <ul className="space-y-3 text-sm">
                                                    <li className="hover:text-black transition-colors cursor-pointer">About</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Features</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Works</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Career</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Help</h3>
                                                <ul className="space-y-3 text-sm">
                                                    <li className="hover:text-black transition-colors cursor-pointer">Customer Support</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Delivery Details</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Terms & Conditions</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Privacy Policy</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='flex justify-around'>
                                            <div>
                                                <h3 className="font-bold text-sm uppercase tracking-wide mb-4">FAQ</h3>
                                                <ul className="space-y-3 text-sm">
                                                    <li className="hover:text-black transition-colors cursor-pointer">Account</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Manage Deliveries</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Orders</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Payments</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-sm uppercase tracking-wide mb-4">Resources</h3>
                                                <ul className="space-y-3 text-sm">
                                                    <li className="hover:text-black transition-colors cursor-pointer">Free eBooks</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Development Tutorial</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">How to - Blog</li>
                                                    <li className="hover:text-black transition-colors cursor-pointer">Youtube Playlist</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gray-300 my-6"></div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                    <p className="text-gray-600 text-sm">
                                        Shop.co © 2000-2023, All Rights Reserved
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                                            <span className="text-xs font-bold text-blue-700">VISA</span>
                                        </div>
                                        <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                                            <div className="flex gap-0.5">
                                                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            </div>
                                        </div>
                                        <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                                            <span className="text-xs font-bold text-blue-600">PayPal</span>
                                        </div>
                                        <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                                            <span className="text-xs font-bold">iPay</span>
                                        </div>
                                        <div className="w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center">
                                            <span className="text-xs font-bold">G Pay</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </>
    )
}

export default Footer

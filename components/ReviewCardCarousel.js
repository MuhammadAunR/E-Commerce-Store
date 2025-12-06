import React from 'react'
import StarRating from './StarRating';
import { Check } from 'lucide-react';

const ReviewCardCarousel = ({ current, customerReviews }) => {

    return (
        <>
            {/* Review Cards  */}
            <div className="relative overflow-hidden md:before:absolute before:content-[''] before:w-20 before:h-full before:bg-white/5 before:z-10 before:backdrop-blur-sm before:left-0 before:top-0 md:after:absolute after:content-[''] after:w-20 after:h-full after:bg-white/5 after:backdrop-blur-sm after:right-0 after:top-0">
                <div
                    className="transition-transform ease-in-out duration-500"
                    style={{
                        transform: `translateX(-${current * (320 + 20)}px)`
                    }}
                >
                    <div className="flex justify-evenly gap-3 my-10 pl-2 md:pl-22 py-5 w-full">
                        {customerReviews.map((item, i) => {
                            return (
                                <div key={i} className="card flex flex-col gap-1 min-w-96 max-w-96 p-5 ring-1 ring-primary/10 rounded-2xl hover:ring-primary/15 hover:bg-secondary/40 transition-colors ease-in-out cursor-pointer">
                                    <StarRating />
                                    <div className='font-extrabold font-body text-lg flex gap-2'>
                                        <span>
                                            {item.name}
                                        </span>
                                        <Check color="#ffffff" strokeWidth={3} className='bg-green-600 rounded-full p-1' />
                                    </div>
                                    <p className='text-justify'>{item.review}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCardCarousel
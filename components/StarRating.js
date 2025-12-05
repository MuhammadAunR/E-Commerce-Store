'use client'
import { Star } from 'lucide-react'
import React, { useState } from 'react'

const StarRating = () => {
    const [hover, setHover] = useState(0)
    return (
        <>
            <div className='flex space-x-1 py-1'>
                {[1, 2, 3, 4, 5].map((star) => {
                    const active = star <= (hover);
                    return <Star
                        key={star}
                        size={18}
                        strokeWidth={1}
                        className={`hover:text-yellow-500 cursor-pointer transition-all ease-in-out duration-500  ${active ? "text-yellow-500 fill-yellow-500" : "text-primary/50 fill-transparent"}`}
                        onClick={() => {
                            setHover(star)
                        }}
                    />
                })}
            </div>
        </>
    )
}

export default StarRating

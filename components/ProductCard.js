import Image from 'next/image'
import React from 'react'
import StarRating from './StarRating'


const ProductCard = ({ images }) => {
    return (
        <>

            {images.map((item, index) => {
                return <div key={index} className="card hover:bg-secondary/50 transition-colors ease-in-out rounded-xl min-h-">
                    <div className='ring-1 ring-primary/50 w-[300px] rounded-xl overflow-hidden'>
                        <Image src={item.path} alt={item.alt} width={400} height={0} className='hover:scale-105 transition-transform ease-in-out duration-500' />
                    </div>
                    <div className='px-2 py-2'>
                        <div className="name font-semibold">{item.name}</div>
                        <div className="rating"><StarRating /></div>
                        <div className="price text-lg font-bold">${item.price}</div>
                    </div>
                </div>
            })}

        </>
    )
}

export default ProductCard

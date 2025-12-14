import Image from 'next/image'
import React from 'react'
import StarRating from './StarRating'
import Link from 'next/link'


const ProductCard = ({ images }) => {
    return (
        <>

            {images.map((item, index) => {
                return <div key={index} className="card shadow-xl rounded-xl">
                    <Link href={`/product/${item.name}`}>
                        <div className=' w-[250px] h-80 rounded-xl relative overflow-hidden'>
                            <Image src={item.path} alt={item.alt} fill className='hover:scale-105 transition-transform ease-in-out duration-500 object-cover' />
                        </div>
                    </Link>
                    <div className='px-2 py-4'>
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

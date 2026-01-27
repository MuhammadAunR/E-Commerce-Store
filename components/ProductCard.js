import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const ProductCard = ({ product }) => {
    
       const strapiURL  = process.env.NEXT_PUBLIC_STRAPI_URL;

    return (
        <>
            <div key={product.id} className="card shadow-xl rounded-xl">
                <Link href={`/product/${product.slug}`}>
                    <div className=' w-[250px] h-80 rounded-xl relative overflow-hidden'>
                        <Image src={`${strapiURL}${product.image.url}`} alt={product.title} fill unoptimized className='hover:scale-105 transition-transform ease-in-out duration-500 object-cover' />
                    </div>
                </Link>
                <div className='px-2 py-4'>
                    <div className="name font-semibold">{product.title}</div>
                    <div className="price text-lg font-bold text-red-500">${product.price}</div>
                </div>
            </div>
        </>
    )
}

export default ProductCard

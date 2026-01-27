'use client'
import ProductDetailCard from '@/components/ProductDetailCard'
import { ProductContext } from '@/components/ProductProvider'
import React, { useContext } from 'react'

const ProductDetail = ({ params }) => {

    const { slug } = React.use(params)
    const product = useContext(ProductContext)
    const details = product.find(item => {
        return (item.slug === slug)
    })

    if (!details) return <div className='font-body font-bold text-center p-10 text-4xl'>Loading...</div>;

    return (
        <>
            <main className='max-w-[1600px] mx-auto'>

                <section>
                    <ProductDetailCard product={details} />
                </section>

            </main>
        </>
    )
}

export default ProductDetail

'use client'
import ProductDetailCard from '@/components/ProductDetailCard'
import React, { useEffect, useState } from 'react'

const ProductDetail = ({ params }) => {

    const [product, setProduct] = useState(null)
    const { slug } = React.use(params)


    useEffect(() => {
        async function fetchProductsDetails() {
            const res = await fetch('/api/products')
            const data = await res.json()
            const products = data?.data ? data.data : [];
            const details = products.find(item => {
                return (item.slug === slug)
            })
            setProduct(details)
        }
        fetchProductsDetails();
    }, [slug])

    
    if (!product) return <div className='font-body font-bold text-center p-10 text-4xl'>Loading...</div>;

    return (
        <>
            <main className='max-w-[1600px] mx-auto'>

                <section className='mt-5'>
                    <ProductDetailCard product={product} />
                </section>

            </main>
        </>
    )
}

export default ProductDetail

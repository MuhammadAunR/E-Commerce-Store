'use client'
import ProductCard from '@/components/ProductCard'
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

    const relatedProducts = product.filter(item => {
        return (item.slug != slug && item.category.title === details.category.title)
    })

    return (
        <>
            <main className='max-w-[1600px] mx-auto'>

                <section>
                    <ProductDetailCard product={details} />
                </section>

                <section className='px-16 mt-10 h-fit py-10'>
                    <h2 className='text-4xl font-bold font-body underline'>Other relevant products :</h2>
                    {relatedProducts.length === 0 && <div className='font-body font-semibold text-center p-10 text-xl'>No related product found.</div>}
                    <div className='py-7 w-fit'>
                        {relatedProducts.map(item => {
                            return <ProductCard key={item.id} product={item} />
                        })}
                    </div>
                </section>

            </main>
        </>
    )
}

export default ProductDetail

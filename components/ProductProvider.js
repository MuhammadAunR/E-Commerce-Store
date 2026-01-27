'use client'
import React, { useState } from 'react'
import { createContext, useEffect } from 'react'

export const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('/api/products')
            const data = await res.json()
            setProducts(data.data)
        }
        fetchProducts();
    }, [])

    return (
        <>
            <ProductContext.Provider value={products}>
                {children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductProvider

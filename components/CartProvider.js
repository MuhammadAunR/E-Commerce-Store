'use client'
import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const normalizeProduct = (product, qty) => ({
        slug: product.slug,
        title: product.title,
        price: product.price,
        quantity: qty,
        image: product.image?.url
            || product.image?.data?.attributes?.url,
    })


    const addToCart = (product, qty) => {
        const normalizedProduct = normalizeProduct(product, qty)
        const existing = items.find(item => {
            return (item.slug === normalizedProduct.slug)
        })
        if (existing) {
            setItems(items.map(item =>
                item.slug === normalizedProduct.slug
                    ? { ...item, quantity: item.quantity + qty }
                    : item
            ))
        } else {
            setItems([...items, normalizedProduct])
        }

    }

    const removeFromCart = (product) => {
        const cart = items.filter(item => {
            return (item.slug != product.slug)
        })
        setItems(cart)
    }



    return (
        <>
            <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartProvider

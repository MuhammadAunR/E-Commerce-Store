'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import CartWindow from './CartWindow'

const Wrapper = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(prev => !prev)
    }

    return (
        <>
            <Navbar onClick={toggleCart} />
            <CartWindow isOpen={isCartOpen} onClose={toggleCart} />
            {children}
        </>
    )
}

export default Wrapper

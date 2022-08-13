import React from 'react';

import {toast} from 'react-hot-toast'

import {getStripe} from '@lib'
import {useAppContext} from "@context";
import {Badge, Box, Button, Drawer} from '@common'
import {CartItem} from "@components/Cart/CartItem";

import {AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai'

import * as styles from './CartStyles'


export const Cart = () => {
    const {cartItems, showCart, setShowCart, totalPrice, totalQuantities} = useAppContext()

    const products = Object.values(cartItems)

    const handleOpenCart = () => setShowCart(true)
    const handleCloseCart = () => setShowCart(false)

    const handleCheckout = async () => {
        const stripe = await getStripe()

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(products)
        })

        if (response.status === 500) return

        const data = await response.json()

        toast.loading('Redirecting...')

        stripe?.redirectToCheckout({sessionId: data.id})
    }

    // const totalPrice = products.reduce((acc, product) => {
    //     return acc + product.price * product.quantity
    // }, 0)
    //
    // const totalQuantities = products.reduce((acc, product) => {
    //     return acc + product.quantity
    // }, 0)

    return (
        <>
            <Badge badgeContent={totalQuantities} color={'error'} sx={styles.Badge}>
                <AiOutlineShopping cursor={'pointer'} onClick={handleOpenCart}/>
            </Badge>

            <Drawer
                sx={styles.Drawer}
                anchor={'right'}
                open={showCart}
                onClose={handleCloseCart}
            >
                <Box sx={styles.Cart}>
                    <Box sx={styles.Top}>
                        <AiOutlineLeft onClick={handleCloseCart} cursor={'pointer'}/>
                        <h4>Your cart</h4>
                        <p>({totalQuantities} item{totalQuantities > 1 ? 's' : ''})</p>
                    </Box>
                    <Box sx={styles.Mid}>
                        {products.map(product => (
                            <CartItem product={product} key={product._id}/>
                        ))}
                    </Box>
                    <Box sx={styles.Bottom}>
                        <Box sx={styles.Subtotal}>
                            <h3>Subtotal:</h3>
                            <p>${totalPrice}</p>
                        </Box>
                        <Button onClick={handleCheckout} sx={styles.Pay} variant={'contained'} color={'secondary'}>Pay with stripe</Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};
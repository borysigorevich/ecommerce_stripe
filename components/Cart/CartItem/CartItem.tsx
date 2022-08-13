import React from 'react';

import {Box, Button, Image} from '@common'
import {ProductType} from "@types";
import {urlFor} from '@lib'


import {AiOutlineMinus, AiOutlinePlus, AiFillDelete} from 'react-icons/ai'

import * as styles from './CartItemStyles'
import {useAppContext} from "@context";

type CartItemProps = {
    product: ProductType & {quantity: number}
}

export const CartItem = ({product}: CartItemProps) => {
    const {increaseQuantity, decreaseQuantity, onRemove} = useAppContext()
    const totalPrice = product.price * product.quantity

    const handleIncrease = () => increaseQuantity(product._id)
    const handleDecrease = () => decreaseQuantity(product._id)
    const handleRemove = () => onRemove(product._id)

    return (
        <Box sx={styles.CartItem}>
            <Box sx={styles.Image}>
                <Image
                    loader={({src, width, quality}) => src + `?w=${width}&q=${quality || '75'}`}
                    width={120}
                    height={120}
                    src={urlFor(product.image[0]).url()}
                />
            </Box>
            <Box sx={styles.Info}>
                <Box sx={styles.Top}>
                    <h3>{product.name}</h3>
                    <p>${totalPrice}</p>
                </Box>
                <Box sx={styles.Bottom}>
                    <Box sx={styles.Calculations}>
                        <Button variant={'outlined'} color={'secondary'} onClick={handleDecrease}>
                            <AiOutlineMinus/>
                        </Button>
                        <p>{product.quantity}</p>
                        <Button variant={'outlined'} color={'secondary'} onClick={handleIncrease}>
                            <AiOutlinePlus/>
                        </Button>
                    </Box>
                    <AiFillDelete color={'#d32f2f'} cursor={'pointer'} onClick={handleRemove}/>
                </Box>
            </Box>
        </Box>
    );
};
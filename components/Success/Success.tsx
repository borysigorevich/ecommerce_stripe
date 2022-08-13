import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'

import {Link, Box} from '@common'
import {useAppContext} from "@context";

import {BsBagCheckFill} from 'react-icons/bs'

import * as styles from './SuccessStyles'
import {SuccessWrapper} from "./SuccessStyles";

export const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useAppContext()

    const [order, setOrder] = useState(null)

    useEffect(() => {
        localStorage.clear()
        setCartItems({})
        setTotalPrice(0)
        setTotalQuantities(0)
    }, [])

    return (
        <Box sx={styles.SuccessWrapper}>
            <Box sx={styles.Success}>
                <BsBagCheckFill color={'#2ba243'} size={25}/>
                <h2>Thank you for your order</h2>

            </Box>
        </Box>
    );
};
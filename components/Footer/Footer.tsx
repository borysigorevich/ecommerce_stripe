import React from 'react'

import {Box} from '@common'

import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";

import * as styles from './FooterStyles'


export const Footer = () => {

    return (
        <Box component={'footer'} sx={styles.Footer}>
            <p>© All Rights Reserved</p>
            <Box>
                <AiFillInstagram/>
                <AiOutlineTwitter/>
            </Box>
        </Box>
    );
};
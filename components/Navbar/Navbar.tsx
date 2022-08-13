import React from 'react';

import {Box, Link} from '@common'

import * as styles from './NavbarStyles'
import {Cart} from "@components";

export const Navbar = () => {
    return (
        <Box component={'header'} sx={styles.Navbar}>
            <Link href="/">
                <a>
                    <p>JSM Headphones</p>
                </a>
            </Link>

            <Cart/>
        </Box>
    );
};
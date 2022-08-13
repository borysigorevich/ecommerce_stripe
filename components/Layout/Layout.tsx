import React, {ReactNode} from 'react';

import Head from "next/head";
import {Box} from "@common";
import {Footer, Navbar} from '@components'

import * as styles from './LayoutStyles'

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <Box sx={styles.Layout}>
            <Head>
                <title>Ecommerce</title>
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </Box>
    );
};
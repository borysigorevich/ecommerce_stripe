import React from 'react';

import {Box} from '@common'

import {FooterBanner, HeroBanner, Product} from "@components";
import {BannerType, ProductType} from "@types";

import * as styles from './HomeStyles'

type HomeProps = {
    products: ProductType[]
    banners: BannerType[]
}

export const Home = ({products, banners}: HomeProps) => {
    return (
        <Box sx={styles.Home}>
            <HeroBanner banner={banners[0]}/>
            <Box sx={styles.TitleBox}>
                <h2>Best selling products</h2>
                <p>Speakers of many variations</p>
            </Box>
            <Box sx={styles.Products}>
                {products?.map(product => (
                    <Product key={product._id} product={product}/>
                ))}
            </Box>
            <FooterBanner banner={banners[0]}/>
        </Box>
    );
};
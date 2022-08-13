import React from 'react';

import {Box, Link, Image} from '@common'
import {ProductType} from '@types'
import {urlFor} from '@lib'

import * as styles from './ProductStyles'

type ProductProps = {
    product: ProductType
}

export const Product = ({product: {image, slug, name, price}}: ProductProps) => {

    const src = urlFor(image[0]).url()

    return (
        <Box sx={styles.Product}>
            <Link href={`/product/${slug.current}`}>
                <a>
                    <Box sx={styles.ProductCard}>
                        <Box sx={styles.ImageBox}>
                            <Image
                                loader={({src, width, quality}) => {
                                    return src + `?w=${width}&q=${quality || '75'}`
                                }}
                                src={src}
                                width={250}
                                height={250}
                            />
                        </Box>
                        <p className={'product-name'}>{name}</p>
                        <p className={'product-price'}>${price}</p>
                    </Box>
                </a>
            </Link>
        </Box>
    );
};
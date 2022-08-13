import React from 'react';

import {Box, Image, Link, Button} from '@common'
import {BannerType} from "@types";

import {urlFor} from '@lib'
import * as styles from './HeroBannerStyles'

type HeroBannerProps = {
    banner: BannerType
}

export const HeroBanner = ({banner}: HeroBannerProps) => {
    const image = banner.image
    const src = urlFor(image).url()

    return (
        <Box sx={styles.HeaderBanner}>
            <Box>
                <p>{banner.smallText}</p>
                <h3>{banner.midText}</h3>
                <h1>{banner.largeText1}</h1>
                <Box sx={styles.ImageBox}>
                    <Image
                        loader={({src, width, quality}) => {
                            return src + `?w=${width}&q=${quality || '75'}`
                        }}
                        src={src}
                        width={350}
                        height={350}
                    />
                </Box>

                <Box>
                    <Link href={`/product/${banner.product}`}>
                        <a>
                            <Button
                                sx={styles.Button}
                                variant={'contained'}
                            >
                                {banner.buttonText}
                            </Button>
                        </a>
                    </Link>
                </Box>

                <Box sx={styles.Description}>
                    <h5>Description</h5>
                    <p>{banner.desc}</p>
                </Box>
            </Box>
        </Box>
    );
};
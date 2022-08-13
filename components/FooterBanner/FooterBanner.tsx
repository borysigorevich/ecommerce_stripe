import React from 'react'

import {Box, Image, Link, Button} from '@common'
import {urlFor} from '@lib'
import {BannerType} from "@types"

import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'

import * as styles from './FooterBannerStyles'


type FooterProps = {
    banner: BannerType
}

export const FooterBanner = ({banner}: FooterProps) => {
    const image = banner.image
    const src = urlFor(image).url()

    return (
        <Box sx={styles.FooterBanner}>
            <Box sx={styles.Top}>
                <Box sx={styles.ImageBox}>
                    <Image
                        loader={({src, width, quality}) => {
                            return src + `?w=${width}&q=${quality || '75'}`
                        }}
                        src={src}
                        width={375}
                        height={375}
                    />
                </Box>
                <Box sx={styles.Left}>
                    <Box>
                        <p className={'discount'}>{banner.discount}</p>
                        <h3 className={'large1'}>{banner.largeText1}</h3>
                        <h3 className={'large2'}>{banner.largeText2}</h3>
                        <p className={'sale-time'}>{banner.saleTime}</p>
                    </Box>
                </Box>
                <Box sx={styles.Right}>
                    <Box>
                        <p className={'small-text'}>{banner.smallText}</p>
                        <h1 className={'mid-text'}>{banner.midText}</h1>
                        <p className={'desc'}>{banner.desc}</p>
                        <Link href={`/product/${banner.product}`}>
                            <a>
                                <Button sx={styles.Button}>{banner.buttonText}</Button>
                            </a>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
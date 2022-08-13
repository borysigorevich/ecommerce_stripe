import React, {SyntheticEvent, useEffect, useState} from 'react';
import {useRouter} from 'next/router'

import {Box, Image, Rating, Button} from '@common'
import {ProductType} from "@types";
import {urlFor} from '@lib'
import {Product} from "@components";

import {useAppContext} from '@context'

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

import * as styles from './ProductDetailsStyles'

type ProductDetailsType = {
    product: ProductType
    products: ProductType[]
}

type QntType = {
    [key: string]: number
}

export const ProductDetails = ({product, products}: ProductDetailsType) => {
    const {query} = useRouter()
    const {decreaseQuantity, increaseQuantity, onAdd, cartItems} = useAppContext()

    const [ratingValue, setRatingValue] = useState(4)
    const [imageIndex, setImageIndex] = useState(0)
    const [qnt, setQnt] = useState<QntType>({})
    console.log(qnt)
    const handleAddQnt = () => setQnt(prev => {
        const value = prev[product._id]
        return {
            ...prev,
            [product._id]: value ? value + 1 : 1
        }
    })

    const handleRemoveQnt = () => setQnt(prev => {
        const value = prev[product._id]

        return {
            ...prev,
            [product._id]: value === 1 ? 1 : value - 1
        }
    })

    const handleChange = (event: SyntheticEvent, newValue: number | null) => {
        setRatingValue(newValue!)
    }

    const handleAddProduct = () => {
        onAdd(product, qnt[product._id])
    }

    console.log(cartItems)

    useEffect(() => {
        setImageIndex(0)
    }, [query])

    return (
        <Box>
            <Box>
                <Box sx={styles.ProductDetails}>
                    <Box sx={styles.ImagesBox}>
                        <Box className={'big-image'}>
                            <Image
                                loader={({src, width, quality}) => {
                                    return src + `?w=${width}&q=${quality || '75'}`
                                }}
                                width={300}
                                height={300}
                                src={urlFor(product.image[imageIndex] || product.image[0]).url()}
                            />
                        </Box>

                        <Box className={'small-image-box'}>
                            {product.image.map((img, index) => (
                                <Box
                                    sx={styles.SmallImg(imageIndex === index)}
                                    key={img._key}
                                >
                                    <Image
                                        loader={({src, width, quality}) => {
                                            return src + `?w=${width}&q=${quality || '75'}`
                                        }}
                                        width={50}
                                        height={50}
                                        src={urlFor(img).url()}
                                        onMouseEnter={() => setImageIndex(index)}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={styles.Info}>
                        <h1 className={'name'}>{product.name}</h1>
                        <Box sx={styles.Rating}>
                            <Rating
                                className={'rating'}
                                value={ratingValue}
                                onChange={handleChange}
                            />
                            <p>(20)</p>
                        </Box>

                        <Box sx={styles.Details}>
                            <p className={'label'}>Details</p>
                            <p className={'details'}>{product.details}</p>
                            <p className={'price'}>${product.price}</p>
                        </Box>

                        <Box sx={styles.Quantity}>
                            <h3 className={'label'}>Quantity:</h3>
                            <p className={'rectangle'}>
                                <Button variant={'outlined'} color={'secondary'} onClick={handleAddQnt}>
                                    <AiOutlinePlus/>
                                </Button>
                                <span className={'count'}>{qnt[product._id] || 0}</span>
                                <Button disabled={!qnt[product._id]} variant={'outlined'} color={'secondary'} onClick={handleRemoveQnt}>
                                    <AiOutlineMinus/>
                                </Button>
                            </p>
                        </Box>

                        <Box sx={styles.Buttons}>
                            <Button disabled={!qnt[product._id]} color={'secondary'} variant={'outlined'} onClick={handleAddProduct}>Add to cart</Button>
                            <Button color={'secondary'} variant={'contained'}>By now</Button>
                        </Box>
                    </Box>
                </Box>


                <Box sx={styles.MarqueeBox}>
                    <Box sx={styles.Marquee}>
                        {products.map(product => (
                            <Product product={product} key={product._id}/>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};
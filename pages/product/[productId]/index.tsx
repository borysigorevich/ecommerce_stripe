import React, {useEffect} from 'react';

import {
    GetStaticProps,
    InferGetStaticPropsType,
    GetStaticPaths
} from 'next'

import {client} from '@lib'

import {ProductType} from '@types'
import {ProductDetails} from "@components";

export const getStaticPaths: GetStaticPaths = async () => {
    const products: ProductType[] = await client.fetch('*[_type == "product"]')

    const paths = products.map(product => ({
        params: {
            productId: product.slug.current
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {productId} = context.params!
    const productQuery = `*[_type == "product" && slug.current == "${productId}"][0]`
    const productsQuery = `*[_type == "product"]`

    const product = await client.fetch(productQuery)
    const products = await client.fetch(productsQuery)

    return {
        props: {
            product,
            products
        }
    }
}

const ProductDetailsPage = ({product, products}: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <ProductDetails product={product} products={products}/>
    );
};

export default ProductDetailsPage
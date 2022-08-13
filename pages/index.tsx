import type {NextPage, GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {client} from '@lib'

import {Home} from "@components";
import React from "react";

export const getServerSideProps: GetServerSideProps = async () => {
    const productQuery = '*[_type == "product"]'
    const products = await client.fetch(productQuery)

    const bannerQuery = '*[_type == "banner"]'
    const banners = await client.fetch(bannerQuery)

    return {
        props: {
            products,
            banners
        }
    }
}

const HomePage: NextPage = ({products, banners}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    return (
        <>
            <Home products={products} banners={banners}/>
        </>
    )
}

export default HomePage

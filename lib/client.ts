import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
    projectId: '4l1pccey',
    dataset: 'production',
    apiVersion: '2022-08-10',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)

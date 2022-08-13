import {NextApiRequest, NextApiResponse} from 'next'
import Stripe from 'stripe'
import {ProductType} from "@types";
// import SessionCreateParams from

const stripe = new Stripe(process.env.SECRET_KEY!, {
    apiVersion: '2020-08-27'
})

type Products = ProductType & {quantity: number}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const products: Products[] = req.body
        try {
            // Create Checkout Sessions from body params.
            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    {
                        shipping_rate: 'shr_1LWHFGDV9okRJI1HFDp9YrB2'
                    },
                    {
                        shipping_rate: 'shr_1LWHFzDV9okRJI1HpqDKL1NX'
                    }
                ],
                line_items: products.map(product => {
                    const img = product.image[0].asset._ref
                    const newImg = img.replace('image-', 'https://cdn.sanity.io/images/4l1pccey/production/')
                        .replace('-webp', '.webp')
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product.name,
                                images: [newImg]
                            },
                            unit_amount: product.price * 100
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1
                        },
                        quantity: product.quantity
                    }

                }),
                mode: 'payment',
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/canceled`,
            }

            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session)
        } catch (error) {

            let errorMessage = 'error'
            if (typeof error === 'string') errorMessage = error
            else if (error instanceof Error) errorMessage = error.message

            res.status(500).json(errorMessage);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}

export default handler
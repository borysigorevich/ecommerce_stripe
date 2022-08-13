import {createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction} from "react";
import {toast} from 'react-hot-toast'
import {ProductType} from "@types";


type ContextProviderProps = {
    children: ReactNode
}

type ProductTypeExtended = ProductType & {
    quantity: number
}

type CartItemsType = {
    [key: string]: ProductTypeExtended
}

type ContextType = {
    showCart: boolean
    cartItems: CartItemsType
    totalPrice: number
    totalQuantities: number
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
    onAdd: (product: ProductType, quantity: number) => void
    setShowCart: Dispatch<SetStateAction<boolean>>
    setCartItems: Dispatch<SetStateAction<CartItemsType>>
    setTotalPrice: Dispatch<SetStateAction<number>>
    setTotalQuantities: Dispatch<SetStateAction<number>>
    onRemove: (id: string) => void
}

// const initialState: ContextType = {
//     showCart: false,
//     cartItems: {},
//     totalPrice: 0,
//     totalQuantities: 0,
//     increaseQuantity: () => {},
//     decreaseQuantity: () => {},
//     onAdd: () => {},
//     setShowCart: () => {},
//     onRemove: () => {}
// }

const AppContext = createContext<ContextType>({} as ContextType)

export const ContextProvider = ({children}: ContextProviderProps) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState<CartItemsType>({})

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)

    // const [quantity, setQuantity] = useState(1)

    const increaseQuantity = (id: string) => {
        const product = cartItems[id]
        product.quantity += 1
        setCartItems({
            ...cartItems,
            [id]: product
        })
        setTotalPrice(prev => prev + product.price)
        setTotalQuantities(prev => prev + 1)
    }

    const decreaseQuantity = (id: string) => {
        const product = {...cartItems[id]}
        const products = {...cartItems}
        const quantity = product.quantity

        if(quantity === 1) {
            delete products[id]
            setCartItems({
                ...products
            })
        } else {
            product.quantity -= 1
            setCartItems({
                ...products,
                [id]: product
            })
        }
        setTotalPrice(prev => prev - product.price)
        setTotalQuantities(prev => prev - 1)
    }

    const onAdd = (product: ProductType, quantity: number) => {
        // const checkProductInCart = cartItems.find(item => item._id === product._id)
        //
        // setTotalPrice(prev => prev + product.price * quantity)
        // setTotalQuantities(prev => prev + quantity)
        //
        // if (checkProductInCart) {
        //     const updatedCartItems = cartItems.map(item => {
        //         if (item._id === product._id) {
        //             return {
        //                 ...item,
        //                 quantity: item.quantity + quantity
        //             }
        //         }
        //         return item
        //     })
        //     setCartItems(updatedCartItems)
        // } else {
        //     setCartItems([...cartItems, {...product, quantity}])
        // }
        // toast.success(`${quantity} ${product.name} added to the cart.`)
        const checkProductInCart = cartItems[product._id]

        if (checkProductInCart) {
            checkProductInCart.quantity += quantity
            setCartItems({
                ...cartItems,
                [product._id]: checkProductInCart
            })
        } else {
            setCartItems({
                ...cartItems,
                [product._id]: {...product, quantity, }
            })
        }
        setTotalQuantities(prev => prev + quantity)
        setTotalPrice(prev => prev + product.price * quantity)
        toast.success(`${quantity} ${product.name} added to the cart.`)
    }

    const onRemove = (id: string) => {
        const product = {...cartItems[id]}
        const products = {...cartItems}
        const quantity = product.quantity
        const price = product.price
        delete products[id]
        setTotalQuantities(prev => prev - quantity)
        setTotalPrice(prev => prev - quantity * price)
        setCartItems({
            ...products
        })
    }

    return <AppContext.Provider value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        setShowCart,
        onRemove,
        setCartItems,
        setTotalQuantities,
        setTotalPrice
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)

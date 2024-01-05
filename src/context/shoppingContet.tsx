import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../components/utilutes/useLocalStorage";


type Cart = {
    id: number
    quantity: number
}
type shoppingCartProviderProps = {
    children: ReactNode
}
type shoppingContextProps = {
    cartItems: Cart[]
    cartQuantity: number
    getQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeCart: (id: number) => void
    openCart: () => void
    closeCart: () => void
}

const ShoppingContext = createContext({} as shoppingContextProps )

export const useShoppingContext = () => {
    return useContext(ShoppingContext)
}

export const ShoppingCartProvider = ({children}: shoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useLocalStorage<Cart[]>('shopping-cart', [])
    const [isOpen, setIsOpen] = useState(false)

    const closeCart = () => setIsOpen(false)
    const openCart = () => setIsOpen(true)

    const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    const getQuantity = (id: number) => {
       return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: number) => {
        setCartItems(currItem => {
            if (currItem.find(item => item.id === id) == null) {
                return [...currItem,{id, quantity: 1}]
            } else {
              return  currItem.map((item) => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1}
                } else return item
              })
            }
        }) 
    }

    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItem => {
            if (currItem.find(item => item.id === id)?.quantity === 1) {
               return currItem.filter(i => i.id !== id)
            } else {
              return  currItem.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item
                })
            }
        })
    }

    const removeCart = (id: number) => {
        setCartItems(currItem => (
            currItem.filter(item => item.id !== id)
        ))
    }
 return (
    <ShoppingContext.Provider value={{
        cartItems,
        cartQuantity,
        getQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCart,
        openCart,
        closeCart
    }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingContext.Provider>
 )
    
}
import { ReactNode, createContext, useContext, useState } from "react";
import { CanvasCart } from "../components/CanvasCart";

type ShoppingContext = {
    cartInBasket: Cart[]
    cartQuantity: number
    getQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    dicreaseQuantity: (id: number) => void
    removeCart: (id: number) => void
    closeCart: () => void
    openCart: () => void
}

type ShoppingCartProps = {
    children: ReactNode
}

 export type Cart = {
    id: number
    quantity: number
}

export const ShoppingContext = createContext({} as ShoppingContext )

export const useShoppingContext = () => {
    return useContext(ShoppingContext)
}

export const ShoppingCartProvider = ({children}: ShoppingCartProps ) => {
   const [cartInBasket, setCartInBasket] = useState<Cart[]>([])
   const [ isOpen, setIsOpen ] = useState(false)

   const closeCart = () => setIsOpen(false)
   const openCart = () => setIsOpen(true)

   const cartQuantity = cartInBasket.reduce((acc, item) => acc + item.quantity,0)
   
   
   const getQuantity = (id: number) => {
    return cartInBasket.find(item => item.id === id)?.quantity || 0
   }
   
   const removeCart = (id: number) => {
    setCartInBasket(currItem => {
        return currItem.filter(item => item.id !== id)
    })
   }

   const increaseQuantity = (id: number) => {
    setCartInBasket(currItems => {
        if (currItems.find(item => item.id === id)== null) {
            return [...currItems, {id, quantity: 1}]
        } else {
            return currItems.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1}
                } else return item
            } )
        }
    })
   }

   const dicreaseQuantity = (id: number) => {
    setCartInBasket(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(i => i.id !== id)
        }else {
          return   currItems.map(item => {
                if (item.id === id) {
                  return {...item, quantity: item.quantity - 1}
                } return item
            })
        }
    })
   }
    return <ShoppingContext.Provider value={{
        cartInBasket,
        cartQuantity,
        getQuantity,
        increaseQuantity,
        dicreaseQuantity,
        removeCart,
        closeCart,
        openCart
    }} >
       {children}
       <CanvasCart isOpen={isOpen} />
 </ShoppingContext.Provider>
}
import { NavItem, Offcanvas, Stack } from "react-bootstrap"
import { CartItem } from "./CartItem"
import { useShoppingContext } from "../context/ShoppingContext"
import { formatCurrency } from "../utilites/FormatCurrency"
import { useSearchStoreQuery } from "./storeApi/storeApi"
type CanvasCart = {
    isOpen: boolean
}

export const CanvasCart = ({ isOpen }: CanvasCart ) => {
  
    const {data} = useSearchStoreQuery('')
    const {cartInBasket, closeCart } = useShoppingContext()
    return <Offcanvas placement="end" show={isOpen}  onHide={closeCart} >
        <Offcanvas.Header closeButton >
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
            <Offcanvas.Body>
               <Stack gap={3} >
                    {cartInBasket.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-4 " >
                       <span className="text-muted" >Total:</span> 
                       {formatCurrency(
                        cartInBasket.reduce((acc, currItem) => {
                          const item = data?.find(i => i.id === currItem.id)
                          return acc + (item?.price || 0 )* currItem.quantity
                        },0)
                       )}
                    </div>
               </Stack>
               
            </Offcanvas.Body>
            
    </Offcanvas>
}
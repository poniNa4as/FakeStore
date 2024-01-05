import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingContext } from "../context/shoppingContet"
import { CanvasItem } from "./CanvasItem"
import { formatCurrency } from "./utilutes/formatCurrency"
import { useFakeProductsQuery } from "../redux/storeApi"
type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
    const {closeCart, cartItems} = useShoppingContext()
    const {data} = useFakeProductsQuery('')
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end" >
        <Offcanvas.Header closeButton >
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3} >
                {cartItems.map(item => (
                    <CanvasItem key={item.id} {...item} />
                ))}
            </Stack>
            <div className=" flex justify-end  fw-bold fs-5 ">
            Total: {" "}
                {formatCurrency(
                  cartItems.reduce((acc, cartItem ) => {
                    const item = data?.find(i => i.id === cartItem.id)
                      return acc + (item?.price || 0) * cartItem.quantity
                  },0)
                )}
            </div>
        </Offcanvas.Body>
    </Offcanvas>
}
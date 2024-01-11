import { Button, Stack } from "react-bootstrap"
import { useShoppingContext } from "../context/ShoppingContext"
import { useSearchStoreQuery } from "./storeApi/storeApi"
import { formatCurrency } from "../utilites/FormatCurrency"
type CartItemProps = {
    id: number
    quantity: number
}
export const CartItem = ({id, quantity}: CartItemProps ) => {
    const {data} = useSearchStoreQuery('')
    const {removeCart} = useShoppingContext()
    const item = data?.find(i => i.id === id)
    if (item == null) return null
    return <Stack direction="horizontal" gap={2} className="align-items-center">
          <img src={item.image} style={{width: '125px'}} ></img>
          <div className="me-auto" >
            <div>
                {item.title}
                {quantity > 1 && (
                    <span className="text-muted" > x {quantity}</span>
                )}
            </div>
            <div className="" >
                {formatCurrency(item.price)}
            </div>
          </div>
          <div className="fs-6 text-muted"  >{formatCurrency(item.price * quantity)}</div>
          <Button onClick={() => removeCart(id)} variant="outline-danger" >&times;</Button>
    </Stack>
}
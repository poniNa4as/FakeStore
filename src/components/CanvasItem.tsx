import { Stack } from "react-bootstrap"
import { useFakeProductsQuery } from "../redux/storeApi"
import { formatCurrency } from "./utilutes/formatCurrency"
import { useShoppingContext } from "../context/shoppingContet"

type CanvasItemProps = {
    id: number
    quantity: number
}

export const CanvasItem = ({id, quantity}: CanvasItemProps) => {
    const {removeCart} = useShoppingContext()
    const {data} = useFakeProductsQuery('')
    const item = data?.find(i => i.id === id)
    if (item == null) return null

    return <Stack gap={3} className="flex  place-items-center" direction="horizontal" >
         <img 
         style={{width:'125px'}}
         src={item?.image} >
         </img>
         <div className="me-auto" >
            <div>
                {item?.title}{" "}
                {quantity > 1 && (
                  <span className="text-muted" > x {quantity}</span>
                )}
            </div>
            <div>
                {formatCurrency(item?.price)}
            </div>
         </div>
         <div>
            {formatCurrency(item?.price * quantity)}
         </div>
         <button onClick={() => removeCart(item?.id)} >&times;</button>
    </Stack>
}
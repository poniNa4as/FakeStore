import { Card } from "react-bootstrap"
import { formatCurrency } from "./utilutes/formatCurrency"
import { useShoppingContext } from "../context/shoppingContet"

type StoreItem = {
    id: number
    image: string
    price: number
    title: string
}

export const StoreItem = ({id, image, title, price}: StoreItem) => {
    const {increaseCartQuantity, decreaseCartQuantity, getQuantity, removeCart} = useShoppingContext()
    const quantity = getQuantity(id)
    return (
        <Card className="h-100" >
            <Card.Img src={image}
            variant="top"
            />
            <Card.Body className="flex flex-col " >
                <Card.Title className="flex justify-between align-baseline mt-auto " >
                    <span>{title}</span>
                    <span className="text-muted" >{formatCurrency(price)}</span>
                </Card.Title>
                <div>
                  {quantity === 0 ? (
                    <button onClick={() => increaseCartQuantity(id)} className="w-100 bg-slate-500 hover:bg-slate-700 rounded-md " >+ Add</button>
                  ): (
                    <div className="flex flex-col gap-3 items-center" >
                        <div className="flex gap-3 items-center" >
                           <button onClick={() => increaseCartQuantity(id)} className=" flex bg-blue-600 w-10 h-10 rounded-md items-center justify-center text-white" > + </button> {quantity} add to cart
                           <button onClick={() => decreaseCartQuantity(id)} className=" flex justify-center bg-blue-600 w-10 h-10 rounded-md items-center text-white" > - </button>
                        </div>
                        <button onClick={() =>removeCart(id) } className="bg-red-400 px-4 py-1 rounded-md " >Remove</button>
                    </div>
                  )}
                </div>
            </Card.Body>
        </Card>
    )
   
}
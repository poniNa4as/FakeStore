import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilites/FormatCurrency";
import { useShoppingContext } from "../context/ShoppingContext";

type CartProductProps = {
    title: string;
    image: string;
    price: number;
    id: number;
    onOpenModel: (id: number) => void;
};

export const CartProduct = ({ title, image, price, id, onOpenModel }: CartProductProps) => {
  const {getQuantity, increaseQuantity, dicreaseQuantity, removeCart} = useShoppingContext()
  const quantity = getQuantity(id)
    
    return (
       
       <>
           <Card className="h-100" style={{ position: 'relative' }}>
            <Card.Img src={image} ></Card.Img>
            <Card.Body  className="d-flex flex-column justify-content-end ">
                <div className="d-flex gap-3 justify-content-between  align-items-center ">
                    <span className="fs-5" >{title}</span>
                    <span className="fs-5 text-muted" >{formatCurrency(price)}</span>
                </div>

                {quantity > 0 ? (
                <div style={{zIndex: '4'}}  className="d-flex flex-column align-items-center gap-2" >
                     <div className="d-flex align-items-center gap-2">
                        <Button onClick={() => dicreaseQuantity(id)} variant="primary" >-</Button> {quantity} + Add to backet
                        <Button onClick={() => increaseQuantity(id)} variant="primary" >+</Button>
                     </div>
                     <Button onClick={() => removeCart(id)} variant="danger" >Remove</Button>
                 </div>
                ): (
                   <div  style={{zIndex: '4'}} >
                     <Button className="w-100" onClick={() => increaseQuantity(id)} variant="primary" >Add</Button>
                   </div>
                )}
               
                
            </Card.Body>
            <button onClick={() => onOpenModel(id)} style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', background: 'transparent' }} ></button>
        </Card>
       </>
    );
};

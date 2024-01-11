import { Card,  Modal } from "react-bootstrap"

type CardModel = {
 isOpenModel: (boolean)
 onCloseModel: () => void
 id: number;
 title: string; 
 image: string;
 price: number;
 description: string
 category: string
 rating: {
 rate: number
 count: number
 }
} 

export const CardModel = ({ description, category, rating, image, onCloseModel, isOpenModel}: CardModel ) => {
    return <Modal  show={isOpenModel} onHide={onCloseModel} >
        <Modal.Header closeButton >
            <Modal.Title className="d-flex  justify-content-center align-content-center" >
            <h3> Category: {category}</h3>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="" >
            <Card>
               <Card.Img className="pb-4" src={image} ></Card.Img>
               <Card.Text>{description}</Card.Text>
               <Card.Footer >
                  <div className="d-flex justify-content-between" >
                     <span>Quantity: {rating.count}</span>
                     <span>Rate: {rating.rate}</span>
                  </div>
               </Card.Footer>
               
            </Card>
        </Modal.Body>
    </Modal>
}
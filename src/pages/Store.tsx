
import { Col, Row } from "react-bootstrap"
import { useFakeProductsQuery } from "../redux/storeApi"
import { StoreItem } from "../components/StoreItem"



export const Store = () => {
const {data} = useFakeProductsQuery('')
console.log(data)
 return <>
  <h1>Store</h1>
  <Row xs={1} md={2} lg={3} className="g-2" >
     {data?.map(item => (
        <Col key={item.id}>
            <StoreItem title={item.title} id={item.id} image={item.image} price={item.price} />
        </Col>
     ))}
  </Row>
 </>
}
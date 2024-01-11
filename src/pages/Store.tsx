import { Col, Row } from "react-bootstrap";
import { useSearchStoreQuery } from "../components/storeApi/storeApi";
import { CartProduct } from "../components/CartProduct";
import { CardModel } from "../components/CardModel";
import { useState } from "react";
import { ProductsFromServ } from "../utilites";

export const Store = () => {
  const { data } = useSearchStoreQuery('');

  return (
    <>
      <h1>Store</h1>
      <Row xm={1} sm={2} lg={3} xl={4} className="g-3" >
        {data?.map(item => (
          <Col key={item.id}>
            <ProductItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const ProductItem = ({ id, title, image, price, description, category, rating }: ProductsFromServ) => {
  const [isOpenModel, setIsOpenModel] = useState(false);

  const openModel = () => {
    setIsOpenModel(true);
  };

  const closeModel = () => {
    setIsOpenModel(false);
  };

  return (
    <>
      <CartProduct {...{ id, title, image, price }} onOpenModel={openModel} />
      <CardModel isOpenModel={isOpenModel} onCloseModel={closeModel} {...{ id, title, image, price, description, category, rating }} />
    </>
  );
};

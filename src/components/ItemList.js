import React from "react";
import Zoom from "react-reveal/Zoom";
import { Row, Col, Card } from "react-bootstrap";
const ItemList = ({ dataItem }) => {
  return (
    <Row>
      <Zoom left>
        {dataItem.length >= 1 ? (
          dataItem.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3 py-2">
                <Card
                  className="d-flex flex-row"
                  styles={{ backgroundcolor: "#F8F8F8" }}
                >
                  <Card.Img
                    className="img-item "
                    variant="top"
                    src={item.imgUrl}
                    style={{ height: "200px", width: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title">{item.title} </div>
                      <div className="item-price"> {item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h2> there is no item </h2>
        )}
      </Zoom>
    </Row>
  );
};

export default ItemList;

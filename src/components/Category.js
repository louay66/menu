import React from "react";
import { Row, Col } from "react-bootstrap";
import Roll from "react-reveal/Roll";

const Category = ({ filterByCategory, categori }) => {
  const OnFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <Row>
      <Col className="d-flex justify-content-center  pb-3">
        <Roll>
          {categori.length >= 1 ? (
            categori.map((cat, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => OnFilter(cat)}
                    style={{ border: "1px solid #b45b35" }}
                    className="btn mx-2"
                  >
                    {cat}
                  </button>
                </div>
              );
            })
          ) : (
            <h4> there is no category </h4>
          )}
        </Roll>
      </Col>
    </Row>
  );
};

export default Category;

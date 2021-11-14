import React from "react";
import * as Bootstrap from "react-bootstrap";

import "../App.css";

//List
function List(props) {
  const { products } = props;

  return (
    <>
      <div className="d-flex p-3 flex-wrap justify-content-center">
        {products.map((item) => {
          const { id, name, price, category, available, vendor, img } = item;
          return (
            <>
              <div className="p-2">
                <Bootstrap.Card style={{ width: "18rem" }} key={id}>
                  <Bootstrap.Card.Img variant="top" src={img} />
                  <Bootstrap.Card.Body>
                    <Bootstrap.Card.Title>{name}</Bootstrap.Card.Title>
                    <div
                      className={
                        available === 1 ? "text-success" : "text-danger"
                      }
                    >
                      {available === 1 ? <p>In stock</p> : <p>Out of stock</p>}
                    </div>
                    <h3 className="text-danger ">{price}₹</h3>
                    <div className="d-flex justify-content-between">
                      <p>{category},</p>
                      <p>vendor:{vendor}</p>
                    </div>

                    <Bootstrap.Button variant="primary"> Buy </Bootstrap.Button>
                  </Bootstrap.Card.Body>
                </Bootstrap.Card>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default List;

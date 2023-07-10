import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector ,useDispatch} from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  //to read state we are using useSelector hook which returns state object
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeCart = (id) => {
    // from here we are dispatching action and passing state to it

    dispatch(remove(id));
  }

  const cards = product.map((product) => (
    <div className="col-md-3 text-center mx-2 my-2">
      <Card key={product.key} className="text-center" style={{height:"400px",width:"350px"}}>
        <div>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "300px", padding: "10px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price} Rs.</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white", textAlign: "center" }}>
          {/* here we are passing paramater to function thats we have to use another function */}
          <Button variant="danger" onClick={() => removeCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      {cards.length ===0 ? <h1 className="text-center my-3">Your Cart is Empty</h1>:<div className="row">{cards}</div>}
    </>
  );
};

export default Cart;

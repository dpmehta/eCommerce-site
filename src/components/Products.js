import React, { useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProduct } from "../store/productSlice";
import Spinner from "./Spinner"

const Products = () => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.product.data);
  const status = useSelector(state => state.product.status);
 

  
  useEffect(() => {
    // const result = fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
    // console.log();

    //dispatching thunk middleware to get products

    dispatch(getProduct());
  },[dispatch]);

  

  const addCart = (product) =>{
    dispatch(add(product));

  }

  
  const cards = products.map((product) => (
    <div className="col-md-3 my-2">
      <Card key={product.key} className="h-100 text-center">
        <div >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "400px",padding:"10px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price} Rs.</Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:"white",textAlign:"center"}}> 
          <Button variant="primary" onClick={()=>addCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
    {/* if data is loading  then we are displaying spinner component */}

      {status==="loading" ? <Spinner />:<div className="row">{cards}</div>}
    </>
  );
};

export default Products;

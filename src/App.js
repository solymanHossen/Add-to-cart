import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { cartReducer } from "./reducer/CartReducer";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProduct = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: "ADD_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div style={{display:"flex"}}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;

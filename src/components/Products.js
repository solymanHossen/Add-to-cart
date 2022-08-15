import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => {
        return (
          <div
          key={prod.id}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              width: "30%",
              border: "1px solid black",
              boxShadow: "1px 2px 4px black",
              gap: 10,
              marginTop: 10,
            }}
          >
            {prod.title}
            <img
            
              src={prod.image}
              alt=""
              style={{ height: 200, objectFit: "cover" }}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{prod.title}</span>
              <b>${prod.price}</b>
            </div>
            {
              cart.some(p=>p.id===prod.id)?
              <button
              style={{
                padding: 5,
                backgroundColor: "RED",
                color: "white",
                border: 0,
                borderRadius: "10px",
              }}

              onClick={()=>dispatch({
                type:'REMOVE_CART',
                payload:prod})}
            >
              Remove Cart
            </button>: <button
              style={{
                padding: 5,
                backgroundColor: "green",
                color: "white",
                border: 0,
                borderRadius: "10px",
              }}

              onClick={()=>dispatch({
                type:'ADD_TO_CART',
                payload:{
                  id:prod.id,
                  title:prod.title,
                  image:prod.image,
                  qty:1,
                  price:prod.price
                }
              })}
            >
             Add to Cart
            </button>

            }
           
           
          </div>
        );
      })}
    </div>
  );
};

export default Products;

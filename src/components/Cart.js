import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  console.log(state);
  const { cart } = state;

  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: "CHANGE_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "gray",
        padding: 10,
        width: "20%",
        borderRadius: "10px",
      }}
    >
      <b style={{ alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal:{total}</b>

      {cart.length > 0 ? (
        cart.map((prod) => (
          <div
            key={prod.title}
            style={{
              display: "flex",
              padding: 10,
              border: "1px solid black",
              margin: 5,
              justifyContent: "space-between",
            }}
          >
            <img
              src={prod.image}
              alt=""
              style={{ height: 200, objectFit: "cover" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{prod.title}</span>
              <b>${prod.price}</b>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                {" "}
                -{" "}
              </button>
              <span>{prod.qty}</span>
              <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: "center" }}>cart empty</span>
      )}
    </div>
  );
};

export default Cart;

import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

export default function Checkout({ cartItems, setCartItems }) {
  const incrementQty = (id) => {
    const book = cartItems.find((book) => book._id === id);
    setCartItems([
      ...cartItems.filter((book) => book._id !== id),
      { ...book, quantity: book.quantity + 1 },
    ]);
  };

  const decrementQty = (id) => {
    const book = cartItems.find((book) => book._id === id);
    setCartItems([
      ...cartItems.filter((book) => book._id !== id),
      {
        ...book,
        quantity: book.quantity > 1 ? book.quantity - 1 : book.quantity,
      },
    ]);
  };

  return (
    <div>
      <div className="row" style={{ marginLeft: "33px" }}>
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px" }}>My Cart</h2>
          {cartItems.map((item) => {
            console.log(item._id);
            return (
              <div>
                <div className="flex-container">
                  <div className="text-left m-1 w-100">
                    <h1>{item.title}</h1>
                    <h1>
                      Price : X {item.prices}
                      USD
                    </h1>
                    <h1 style={{ display: "inline" }}>Quantity :</h1>
                    <button
                      name={item._id}
                      onClick={() => incrementQty(item._id)}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    {item.quantity}
                    <button
                      name={item._id}
                      onClick={() => decrementQty(item._id)}
                    >
                      <i className="fa fa-minus" aria-hidden="true" s></i>
                    </button>
                    <hr />
                  </div>

                  <div className="m-1 w-100">
                    <img
                      src={`http://localhost:3000/${item.bookImg}`}
                      alt=""
                      style={{ height: "120px", width: "120px" }}
                    />
                  </div>
                  <div className="m-1 w-100">
                    <button>
                      <i
                        className="fa fa-trash mt-5"
                        //   onClick={() => {
                        //     dispatch(deleteFromCart(item));
                        //   }}
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-md-4 text-right">
          {/* <h2>Total : {subtotal} USD</h2> */}
          <StripeCheckout
            // amount={subtotal * 100}
            shippingAddress
            // token={tokenHander}
            stripeKey={
              "pk_test_51KeRR0JO42TJpmFAh6Lk7BIPUEQzHvwnMyXe0orAooVUyPOAS0Zbg29ZfCJX2qtsxPgE32UXTqqa0cjCvUyIJY8200UlMiXlqb"
            }
            currency="USD"
          >
            <button
              style={{ marginTop: "150px", marginRight: "50px" }}
              className="btn"
            >
              Pay Now
            </button>
          </StripeCheckout>
          {/* <Checkout subtotal={subtotal} /> */}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../redux/StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-add"
          src="https://secondjob.kr/wp-content/uploads/2021/07/%E1%84%80%E1%85%A1%E1%84%85%E1%85%A9%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5_7%E1%84%8B%E1%85%AF%E1%86%AF-%E1%84%85%E1%85%B5%E1%84%87%E1%85%B2%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A6%E1%86%AB%E1%84%90%E1%85%B3-01-1024x142.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout-title">장바구니 입니다.</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../redux/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-img" src={image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small> ₩ </small>
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>장바구니 삭제</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;

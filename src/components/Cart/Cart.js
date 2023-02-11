import React from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 3, price: 19.22 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal hideCart={props.hideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>42.25</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={props.hideCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

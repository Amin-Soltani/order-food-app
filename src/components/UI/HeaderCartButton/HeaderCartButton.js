import React from "react";
import styles from "./HeaderCartButton.module.css";
import { RiShoppingCart2Fill } from "react-icons/ri";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.showCart}>
      <span className={styles.icon}>
        <RiShoppingCart2Fill />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>7</span>
    </button>
  );
};

export default HeaderCartButton;

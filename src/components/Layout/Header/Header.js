import React from "react";
import styles from "./Header.module.css";

import mealsImage from "../../../assets/images/Annotation 2023-01-20 133612.jpg";
import HeaderCartButton from "../../UI/HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <h2>Amin Foods</h2>
          <HeaderCartButton showCart={props.showCart} />
        </div>
      </header>
      <div>
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;

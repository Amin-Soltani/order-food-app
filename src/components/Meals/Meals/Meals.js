import React from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import SummeryMeals from "../SummeryMeals/SummeryMeals";
import styles from "./Meals.module.css";

const Meals = () => {
  return (
    <>
      <SummeryMeals />
      <AvailableMeals />
    </>
  );
};

export default Meals;

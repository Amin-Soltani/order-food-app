import React from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 19.68,
  },
  {
    id: "m2",
    name: "sakjl;",
    description: "Finest fish and veggies",
    price: 45.45,
  },
  {
    id: "m3",
    name: "dfaeef",
    description: "Finest fish and veggies",
    price: 78.21,
  },
  {
    id: "m4",
    name: "eferv",
    description: "Finest fish and veggies",
    price: 14.32,
  },
  {
    id: "m5",
    name: "ojls",
    description: "Finest fish and veggies",
    price: 22.45,
  },
];

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

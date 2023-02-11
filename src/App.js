import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import Meals from "./components/Meals/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Layout showCart={showCartHandler}>
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </Layout>
  );
}

export default App;

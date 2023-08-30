import { useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIssShow , setCartIsShow] = useState(false);

  const showCartHandler = () => {setCartIsShow(true);}

  const hideCartHandler = () => {setCartIsShow(false);}

  return (
    <CartProvider>
        { cartIssShow && <Cart onHideCart={hideCartHandler}/> }
        <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;

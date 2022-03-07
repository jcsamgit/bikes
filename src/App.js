
// import './App.css';

import { Route } from "react-router-dom";
import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer";
import { CartProvider } from "./context/cartContext";
import { ProductProvider } from "./context/productContext";
import Cart from "./components/cart";

function App() {
  return (
    // <ProductProvider>
    <CartProvider>
    <BrowserRouter>

    <NavBar/>
    <Switch>

      <Route exact path="/">
        <ItemListContainer/>
      </Route>
      <Route exact path="/bikes">
        <ItemListContainer/>
      </Route>
    
      <Route exact path="/category/:categoryId">
        <ItemListContainer/>
      </Route>

      <Route exact path="/item/:id">
        <ItemDetailContainer/>
      </Route>

      <Route exact path="/cart">
        <Cart/>
      
      </Route>

    </Switch>

    </BrowserRouter>
    </CartProvider>
    // </ProductProvider>
  );
}

export default App;

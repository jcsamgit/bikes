
// import './App.css';

import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage"
import { Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import OrdenDeCompra from "./components/OrdenDeCompra";


function App() {
  return (    
    <BrowserRouter>

    <NavBar/>
    <Switch>

      <Route path="/orden-de-compra">
        <OrdenDeCompra/>
      </Route>
      <Route path="/contacto">
        <Contacto/>
      </Route>
      <Route path="/carrito">
        <CheckoutPage/>
      </Route>

      <Route path="/item/:id">
        <ItemDetailContainer/>
      </Route>

      <Route exact path="/category/:categoryId">
        <Products/>
        <Footer/>
      </Route>
      
      <Route path="/">
        <Products/>
        <Footer/>
      </Route>


    </Switch>
    

    </BrowserRouter>
  );
}

export default App;
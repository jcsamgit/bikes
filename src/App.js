
import { HashRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage"
import { Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import OrdenDeCompra from "./components/OrdenDeCompra";


function App() {
  return (    
    <HashRouter>

    <NavBar/>
    <Switch>

      <Route path="/bikes/orden-de-compra">
        <OrdenDeCompra/>
      </Route>
      <Route path="/bikes/contacto">
        <Contacto/>
      </Route>
      <Route path="/bikes/carrito">
        <CheckoutPage/>
      </Route>

      <Route path="/bikes/item/:id">
        <ItemDetailContainer/>
      </Route>

      <Route exact path="/bikes/category/:categoryId">
        <Products/>
        <Footer/>
      </Route>
      
      <Route path="/bikes">
        <Products/>
        <Footer/>
      </Route>


    </Switch>
    

    </HashRouter>
  );
}

export default App;

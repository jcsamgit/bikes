
// import './App.css';

import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage"


function App() {
  return (

    
    <BrowserRouter>

    <NavBar/>
    <Switch>
      {/* <Products/> */}
      <CheckoutPage/>

    </Switch>

    </BrowserRouter>
  );
}

export default App;

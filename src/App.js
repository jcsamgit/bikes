
import { HashRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage"
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse";
import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import {useStateValue} from "./StateProvider"
import Checkout from "./components/CheckoutForm/Checkout";


function App() {
  const [{user}, dispatch]= useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log(authUser)
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])
  return (    
    <HashRouter>

    <NavBar/>
    <Switch>

      <Route path="/contacto">
        <Contacto/>
      </Route>
      <Route path="/sesion">
        <IniciarSesion/>
      </Route>
      <Route path="/registro">
        <Registrarse/>
      </Route>

      <Route path="/carrito">
        <CheckoutPage/>
      </Route>
      <Route path="/checkout">
        <Checkout/>
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
    

    </HashRouter>
  );
}

export default App;

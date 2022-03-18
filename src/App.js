
// import './App.css';

import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

function App() {
  return (

    
    <BrowserRouter>

    <NavBar/>
    <Switch>
      <Product/>

    </Switch>

    </BrowserRouter>
  );
}

export default App;

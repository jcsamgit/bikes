
import { Link } from 'react-router-dom'
import '../CSS/navBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'
import {useStateValue} from "../StateProvider"


function NavBar(){
    const [{cart},dispatch]= useStateValue()
    return (
        <>
            <h1 ><Link className="fantasia" to='/bikes'>Bikeshop</Link></h1>
            <nav className="navbar">
                <ul className="menu">
                    <li>
                        <Link to='/bikes'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='#'>Categoria</Link>
                        <ul >
                            <li><Link to={'/bikes/category/bicicletas'}>Bicicletas</Link> </li>
                            <li><Link to={'/bikes/category/accesorios'}>Accesorios</Link></li>
                        </ul>
                    </li>
                    <li>
                        <li><Link to={'/bikes/contacto'}>Contacto</Link></li>
                    </li>
                    <li>

                        <Link to={'/bikes/carrito'}> 
                            <span className='navCart'>
                                <CartWidget/>
                                    {cart?.length > 0 &&   
                                        <p className='contadorCarrito'>
                                            {cart?.length}
                                        </p>
                                    }
                            </span>
                        </Link> 

                    </li>
                        
                </ul>
            </nav>
            
         </>

    )
}

export default NavBar
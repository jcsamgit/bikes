
import { Link } from 'react-router-dom'
import '../CSS/navBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'
import {useStateValue} from "../StateProvider"


function NavBar(){
    const [{basket},dispatch]= useStateValue()
    return (
        <>
        {/* <div className='navContent'> */}
            <h1 ><Link className="fantasia" to='/'>Bikeshop</Link></h1>
        <nav className="navbar">
            <ul className="menu">
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='#'>Categoria</Link>
                    <ul >
                        <li><Link to={'/category/bicicletas'}>Bicicletas</Link> </li>
                        <li><Link to={'/category/accesorios'}>Accesorios</Link></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>

                    <Link to={'/carrito'}> 
                        <span className='navCart'>
                            <CartWidget/>
                                {basket?.length > 0 &&   
                                    <p className='contadorCarrito'>
                                        {basket?.length}
                                    </p>
                                }
                        </span>
                    </Link> 

                </li>
                    
            </ul>
        </nav>
         
         {/* </div> */}
         </>

    )
}

export default NavBar
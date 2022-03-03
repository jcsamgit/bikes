
import { Link } from 'react-router-dom'
import './navBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'


function NavBar(){
    return (
        <>
        <nav className="navbar">
        <h1 ><Link className="fantasia" to='/'>Bikeshop</Link></h1>
            <ul className="subCategoria">
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
                    <Link to={'/cart'}>Carrito</Link> 
                </li>
                    <CartWidget/>
            </ul>
        </nav>
         
         </>

    )
}

export default NavBar
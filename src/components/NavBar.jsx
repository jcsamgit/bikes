
import { Link, useHistory } from 'react-router-dom'
import '../CSS/navBar.css'
import './CartWidget.js'
import CartWidget from './CartWidget.js'
import {useStateValue} from "../StateProvider"
import { auth } from '../firebase'
import { actionTypes } from '../reducer'


function NavBar(){
    const [{cart, user},dispatch]= useStateValue()
    const history = useHistory( )

    const handleAuth =()=>{
        if (user){
            auth.signOut()
            dispatch({
                type: actionTypes.EMPTY_CART,
                cart: []
            })
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            })
            history.push("/")
        }
    }
    return (
        <>
            <h1 ><Link className="fantasia" to='/'>Bikeshop</Link></h1>
            <nav className="navbar">
                <ul className="menu">
                    <li>
                        <Link to='/'>
                            Hola {user ? user.email: "Invitado"}
                        </Link>
                    </li>
                    {/* <li>
                        <Link to='/'>Inicio</Link>
                    </li> */}
                    <li>
                        <Link to='#'>Categoria</Link>
                        <ul >
                            <li><Link to={'/category/bicicletas'}>Bicicletas</Link> </li>
                            <li><Link to={'/category/accesorios'}>Accesorios</Link></li>
                        </ul>
                    </li>
                    {/* <li>
                        <Link to={'/contacto'}>Contacto</Link>
                    </li> */}
                    <li>
                        <li>
                            <Link to={'/sesion'} onClick={handleAuth}>
                                {/* <button > */}
                                    {user? "Cerra sesion": "Iniciar sesion"} 
                                {/* </button> */}
                            </Link>
                        </li>
                    </li>
                    <li>

                        <Link to={'/carrito'}> 
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
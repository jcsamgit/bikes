
import React from 'react'
import { Link } from 'react-router-dom';
// import { getCartTotal } from '../reducer'
import { useStateValue } from '../StateProvider'


const Total = () => {
  const [{cart},dispatch]= useStateValue();
  // console.log("getCart",getCartTotal(cart)) //idefinido
  
  // console.log("cart",cart)
  const getCartTotal= cart?.reduce((sum,actual)=> sum + actual.precio,0)
  return (
    <div className='total'>
        <p>Total: ${getCartTotal}  </p>

        <button className='finCompra'>
          <Link to="/orden-de-compra" style={{textDecoration:"none"}}>Terminar compra</Link>
        </button>
    </div>
  )
}
export default Total
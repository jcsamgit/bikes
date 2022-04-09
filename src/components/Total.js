
import React from 'react'
import { Link } from 'react-router-dom';
// import { getBasketTotal } from '../reducer'
import { useStateValue } from '../StateProvider'


const Total = () => {
  const [{basket},dispatch]= useStateValue();
  // console.log("getbasket",getBasketTotal(basket)) //idefinido
  
  // console.log("basket",basket)
  const getBasketTotal= basket?.reduce((sum,actual)=> sum + actual.precio,0)
  return (
    <div className='total'>
        <p>Total: ${getBasketTotal}  </p>

        <button className='finCompra'>
          <Link to="/orden-de-compra" style={{textDecoration:"none"}}>Terminar compra</Link>
        </button>
    </div>
  )
}
export default Total
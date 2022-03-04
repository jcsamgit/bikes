// import React, { createContext, useEffect, useState } from 'react';
// import { getDataBase } from '../firebase/firebase';


// const productContext = createContext({});

// export const ProductProvider = ({ children }) => {

//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     const getProducts = async () => {
//       const db = getDataBase();
//       const productCollection = db.collection('products');
//       const productSnapshot = await productCollection.get();
//       const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       console.log({productList});
//       setProducts(productList);
//     };
//     getProducts();
//   }, []);

//   return (
//     <productContext.Provider value={{ products, setProducts }}>
//       {children}
//     </productContext.Provider>
//   );
// };

// export default productContext;
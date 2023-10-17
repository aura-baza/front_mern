//importamos react y los hooks que utilizaremos
import {createContext, useState} from "react";

//creo el constexto
export const ContextProducts=createContext();

//creo la funcion que proveerá el constexto
const ProviderProducts=({children})=>{
    const [products, setProducts] = useState([]);
   // retormanos el contextos con su respectivo provider 
    return <ContextProducts.Provider value={{products, setProducts}}>{children}</ContextProducts.Provider>;
}

export default ProviderProducts;
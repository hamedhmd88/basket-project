import { createContext, useContext, useState, useEffect } from "react"
import api from "../services/config";


const productContext = createContext();



function ProductsProvider({children}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response);
                
            } catch (error) {
                console.log(error.message);
            }
            
        }
        fetchProducts();
    }, [])


  return (
    <productContext.Provider value={{products}}>
        {children}
    </productContext.Provider>
  )
}
export const useProducts = () => {
    return useContext(productContext);
    
}

export default ProductsProvider

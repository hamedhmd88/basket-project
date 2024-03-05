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

// این هوک کاستوم هوک برای تمام محصولات است
export const useProducts = () => {
    return useContext(productContext);
    
    
};

// این کاستوم هوک برای دسترسی به جزییات هر محصول است
export const useProductDetails = (id) => {
    const product = useContext(productContext);
    // در فچ ای پی آی بالا مقادیر را در ست پروداکتس میریزیم برای همین از آبجکت پروداکتس متد فایند میگیریم
    const result = product.products.find((item) => item.id ===id); // یعنی هر محصولی که با آیدی که میگیریم یکسان بود تمام جزییات آن را برگردان
    return result

};

export default ProductsProvider

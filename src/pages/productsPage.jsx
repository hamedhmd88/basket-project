import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsProvider"
import { createQueryObject, filterProducts, getQueryParams, searchProducts } from "../helper/helper";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";



function productsPage() {

  const {products} = useProducts();


  const [displayed, setDisplayed] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState({}); // داخل این آبجکت مقادیر سرج شده و کتگوری های انتخاب شده قرار میگیرد 

  const [searchParams, setSearchParamsh] =useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getQueryParams(searchParams)); // سرچ پارامزو میزاریم که در پایین در ست سرچ پارامز مقدار کوئری رار دادیم که آبجکت سرج و کتگوری است

  }, [products]);


  useEffect(() => {
    setSearchParamsh(query); // داخل سرچ پارامز باید یک آبجکت نوشت ولی چون در استیت کوئری یک آبجکت خالی تعریف کردیم که مقادیر سرچ و کتگوری را میگیرد دیگر نیاز نیست اینجا هم آبجکت تعریف کنیم
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    console.log(finalProducts);
    setDisplayed(finalProducts);

  }, [query])



 

  return (
    <>

    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className="flex justify-between">
            <div className="w-full flex flex-wrap justify-between">
              {!displayed.length && <Loader/>}
              {displayed.map((product) => (
                <Card key={product.id} data={product}/>
              ))}
            </div>
            
    <Sidebar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default productsPage

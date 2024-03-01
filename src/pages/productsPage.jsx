import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../contect/ProductsProvider"
import { MdOutlineSearch } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { createQueryObject, filterProducts, getQueryParams, searchProducts } from "../helper/helper";


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

  const searchHandler = () => {
    setQuery((item) => {
      return createQueryObject(item, {search});
    })
  }

  const categoryHandler = (e) => {
    const {tagName} = e.target; // برای دستیابی به تگ های Li
    const category = e.target.innerText.toLowerCase(); // برای دستیابی به محتوای داخل تگهای Li
    if (tagName != "LI") return;
    setQuery((item)=> {
        return createQueryObject(item, {category});
    })
  }

  return (
    <>
    <div>
      <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
      <button onClick={searchHandler}>
        <MdOutlineSearch/>
      </button>
    </div>
    <div className="flex justify-between">
            <div className="w-full flex flex-wrap justify-between">
              {!displayed.length && <Loader/>}
              {displayed.map((product) => (
                <Card key={product.id} data={product}/>
              ))}
            </div>
            <div>
              <div>
                  <BiCategoryAlt/>
                  <p>Categories</p>
              </div>
              <ul onClick={categoryHandler}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Woman's Clothing</li>
              </ul>
            </div>

    </div>
    </>
  )
}

export default productsPage

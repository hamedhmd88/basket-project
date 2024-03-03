import { BiCategoryAlt } from "react-icons/bi";
import { createQueryObject } from "../helper/helper";


const categories = [
    {id: 1, type: "All"},
    {id: 2, type: "Electronics"},
    {id: 3, type: "Jewelery"},
    {id: 4, type: "Men's Clothing"},
    {id: 5, type: "Women's Clothing"},
]

function Sidebar({query, setQuery}) {

    const categoryHandler = (e) => {
        const {tagName} = e.target; // برای دستیابی به تگ های Li
        const category = e.target.innerText.toLowerCase(); // برای دستیابی به محتوای داخل تگهای Li
        if (tagName != "LI") return;
        setQuery((item)=> {
            return createQueryObject(item, {category});
        })
      };

  return (
    <>
        <div className="w-52 h-fit m-2 p-2 ml-8 bg-white border-2 border-dashed border-[#e2e2e2] rounded-3xl">
              <div className="w-52 flex items-center mb-[10px] text-[#0B2982] font-medium">
                  <BiCategoryAlt/>
                  <p className="ml-[10px]">Categories</p>
              </div>
              <ul onClick={categoryHandler}>
                {categories.map((category) => (
                  <li key={category.id} className={category.type.toLowerCase() === query.category ? "selected" : null} >
                      {category.type}
                  </li>
              ))}
              </ul>

            </div>
    </>
  )
}

export default Sidebar

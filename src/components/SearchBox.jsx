import { MdOutlineSearch } from "react-icons/md";
import { createQueryObject } from "../helper/helper";



function SearchBox({search, setSearch, setQuery}) {

    const searchHandler = () => {
        setQuery((item) => {
          return createQueryObject(item, {search});
        })
      }
  return (
    <>
    <div className=" my-3 mx-10">
      <input 
      className=" border-2 border-dashed border-[#0D3CCA] p-3 w-64 text-xs text-[#0D3CCA] rounded-lg mr-3 focus:outline-none"
      type="text" 
      placeholder="Search..." 
      value={search} 
      onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
      <button className="p-[10px] text-[1rem] bg-[#0D3CCA] text-[#fff] border-0 rounded-xl cursor-pointer hover:shadow-lg " onClick={searchHandler}>
        <MdOutlineSearch/>
      </button>
    </div>
    </>
  )
}

export default SearchBox

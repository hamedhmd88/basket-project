import { BiAlignLeft } from "react-icons/bi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineReadMore } from "react-icons/md";
import { MdOutlineRestoreFromTrash } from "react-icons/md";



import { Link } from 'react-router-dom';
import { shortText } from "../helper/helper";
import { useCart } from "../context/CartProvider";
import { Grid, Tooltip } from "@mui/material";



function Card({data}) {

    const {id, image, title, price} = data;

      const {state, dispatch} = useCart();
      console.log(state)

    const clickHandler = () => {
      dispatch({type: "ADD_ITEM", payload: data});
    }

  return (
    <div className="w-[270px] m-3 p-5 flex flex-col items-start justify-end bg-[#fff] border-2 border-dashed border-[#e2e2e2] rounded-[20px] transition hover:shadow-2xl">
      <img src={image} alt={title}  className=' w-[230px] h-[230px] p-5 mb-5 bg-[#fff]'/>
      <h3 className="  text-[#0D3CCA] text-xl font-medium">{shortText(title)}</h3>
      <p className="text-[#666] text-[1.5rem] font-[700] m-[10px]  ">{price} $</p>
      <div className=" w-full flex justify-between items-center" >
      <Tooltip title="Read more" placement="right" arrow>
        <Link to={`/products/${id}`} className=" text-[2rem] h-8 rounded-[8px] text-[#0D3CCA] cursor-pointer transition-all duration-1000  hover:hover-item">
            <MdOutlineReadMore/>
        </Link>
        </Tooltip>
        <div className="flex items-center">
            <span className=" w-5 text-center mx-[10px] my-[0]"></span>
            <Tooltip title="Add Item" placement="top" arrow>
            <button
             className="text-[#0D3CCA]  border-none text-2xl h-8 w-8 leading-8 p-1 rounded-[8px] cursor-pointer transition-all duration-1000  hover:hover-item"
             onClick={clickHandler}>
            <MdOutlineShoppingCartCheckout/>
            </button>
            </Tooltip>
            <Tooltip title="Remove Item" placement="top" arrow>
            <button
             className="text-[#0D3CCA]  border-none text-2xl h-8 w-8 leading-8 p-1 rounded-[8px] cursor-pointer transition-all duration-1000 hover:hover-item "
             onClick={clickHandler}>
            <MdOutlineRestoreFromTrash/>
            </button>
            </Tooltip>
            <Tooltip title="Increase" placement="top" arrow>
            <button
             className="text-[#0D3CCA] text-center  border-none text-2xl h-8 w-8 leading-8 p-[-1rem] rounded-[8px] cursor-pointer transition-all duration-1000  hover:hover-item"
             onClick={clickHandler}>
              +
            </button>
            </Tooltip>
            < Tooltip title="Decrease" placement="top" arrow>
            <button
             className="text-[#0D3CCA]  border-none text-2xl h-8 w-8 leading-8 p-[-1rem] rounded-[8px] cursor-pointer transition-all duration-1000  hover:hover-item"
             onClick={clickHandler}>
              -
            </button>
            </Tooltip>
            
        </div>
      </div>
    </div>
  )
}

export default Card

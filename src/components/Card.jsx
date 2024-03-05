import { BiAlignLeft } from "react-icons/bi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineReadMore } from "react-icons/md";
import { MdOutlineRestoreFromTrash } from "react-icons/md";



import { Link } from 'react-router-dom';
import { productQuantity, shortText } from "../helper/helper";
import { useCart } from "../context/CartProvider";
import { Grid, Tooltip } from "@mui/material";



function Card({data}) {

    const {id, image, title, price} = data;

      const {state, dispatch} = useCart();

      // ما از این کووانتیتی برای هندل کردن مقدار نمایش اولین آیتم انتخابی از  هر یک از محصول ها استفاده میکنیم
      const quantity = productQuantity(state, id);
      console.log(quantity)

    const clickHandler = (type) => {
      dispatch({type: type, payload: data});
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

        {
          quantity === 1 && (
            <Tooltip title="Remove Item" placement="top" arrow>
            <button
             className="text-[#0D3CCA]  border-none text-2xl h-8 w-8 leading-8 p-1 rounded-[8px] cursor-pointer transition-all duration-1000 hover:hover-item "
             onClick={() => clickHandler("REMOVE_ITEM")}>
            <MdOutlineRestoreFromTrash/>
            </button>
            </Tooltip>
          )
        }

        {
          quantity > 1 && (
            <Tooltip title="Decrease" placement="top" arrow>
            <button
             className=" border-none text-2xl h-8 w-8 leading-8 p-[-1rem] rounded-[8px] cursor-pointer transition-all duration-1000  shadow-lg  bg-[#0B2982] text-[#fff]"
             onClick={() => clickHandler("DECREASE")}>
              -
            </button>
            </Tooltip>
          )
        }
          {/* //  از !! استفاده میکنیم برای بولین کردن مقدار */}
        {!!quantity && <span className="text-[#666] text-[1.5rem] font-[500]">{quantity}</span>}

        {
          quantity === 0 ? (
            <Tooltip title="Add Item" placement="top" arrow>
            <button
             className="text-[#0D3CCA]  border-none text-2xl h-8 w-8 leading-8 p-1 rounded-[8px] cursor-pointer transition-all duration-1000  hover:hover-item"
             onClick={() => clickHandler("ADD_ITEM")}>
            <MdOutlineShoppingCartCheckout/>
            </button>
            </Tooltip>
          ) : (
            <Tooltip title="Increase" placement="top" arrow>
            <button
             className=" text-center  border-none text-2xl h-8 w-8 leading-8 p-[-1rem] rounded-[8px] cursor-pointer transition-all duration-1000  shadow-lg  bg-[#0B2982] text-[#fff]"
             onClick={() => clickHandler("INCREASE")}>
              +
            </button>
            </Tooltip>
          )
        }
        
        
        
      </div>
    </div>
  )
}

export default Card

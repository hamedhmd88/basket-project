import { BiAlignLeft } from "react-icons/bi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdOutlineReadMore } from "react-icons/md";


import { Link } from 'react-router-dom';
import { shortText } from "../helper/helper";



function Card({data}) {

    const {id, image, title, price} = data;

  return (
    <div className="w-[270px] m-3 p-5 flex flex-col items-start justify-end bg-[#fff] border-2 border-dashed border-[#e2e2e2] rounded-[20px] transition hover:shadow-2xl">
      <img src={image} alt={title}  className=' w-[230px] h-[230px] p-5 mb-5 bg-[#fff]'/>
      <h3 className="  text-[#fe5d42] text-xl font-medium">{shortText(title)}</h3>
      <p className="text-[#666] text-[0.9rem] font-[700] m-[10px]  ">{price} $</p>
      <div className=" w-full flex justify-between items-center" >
        <Link to={`/products/${id}`} className=" text-[2rem] h-6 text-[#fe5d42] cursor-pointer">
            <MdOutlineReadMore/>
        </Link>
        <div className="flex items-center">
            <span className=" w-5 text-center mx-[10px] my-[0]"></span>
            <button className="text-[#fe5d42]  border-none text-2xl h-8 w-8 leading-8 p-1 rounded-[8px] cursor-pointer ">
            <MdOutlineShoppingCartCheckout/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Card

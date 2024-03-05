import { shortText } from "../helper/helper"
import { MdOutlineRestoreFromTrash } from "react-icons/md";


function BasketCard({data, clickHandler}) {
    const {image, title, quantity} = data;
  return (
    <div className="flex items-center justify-between border-2 border-dashed border-blue-700 rounded-2xl p-5 mr-5 mb-5">
      <img
      className="w-14 h-14" 
      src={image} 
      alt="title"/>
      <p>{shortText(title)}</p>
      <div  className="flex items-center actions">
        {
            quantity === 1 && (
            <button className="p-[2px]" onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdOutlineRestoreFromTrash/>
            </button>
        )}
        {
            quantity > 1 && (
                <button className="p-[-1rem] font-medium" onClick={() => clickHandler("DECREASE", data)}> - </button>
            )
        }

        <span className="w-5 text-center my-0 mx-1 font-medium text-xl">{quantity}</span>

        <button className="p-[-1rem] font-medium" onClick={() => clickHandler("INCREASE", data)}> + </button>
      </div>
    </div>
  )
}

export default BasketCard

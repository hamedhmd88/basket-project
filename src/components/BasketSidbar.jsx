import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

export default function BasketSidbar({state, clickHandler}) {
  return (
    <div className="w-[300px] mr-8 border-2 border-dashed border-blue-700 rounded-3xl p-5">

      <div className="flex items-center text-blue-900 mb-4">
        <span className="text-2xl mr-2"><TbChecklist/></span>
        <p className="font-medium "> Total: &nbsp; </p>
        <span className="font-medium text-gray-700"> {state.total} $ </span>
      </div>

      <div className="flex items-center text-blue-900 mb-4">
        <span className="text-2xl mr-2"><FaHashtag/></span>
        <p className="font-medium">Quantity: &nbsp;</p>
        <span className="font-medium text-gray-700">{state.itemsCounter}</span>
      </div>

      <div className="flex items-center text-blue-900 mb-4">
        <span className="text-2xl mr-2"><BsPatchCheck/></span>
        <p className="font-medium">Status: &nbsp;</p>
        <span className="font-medium text-gray-700">{!state.checkout && "Pending..."}</span>
      </div>

      <button
        className="w-full mt-10 bg-blue-800 text-white border-none text-lg p-1 rounded-lg cursor-pointer "
        onClick={() => clickHandler("CHCKOUT")}>Checkout</button>
    </div>
  )
}

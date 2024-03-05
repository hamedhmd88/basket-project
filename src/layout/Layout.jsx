import { MdShoppingCart } from "react-icons/md";
import {  Link } from 'react-router-dom'
import { useCart } from "../context/CartProvider";

export default function Layout({children}) {

    const {state} = useCart();

  return (
    <>
        <header className="flex items-center justify-between bg-blue-700 text-white py-3 px-5 my-10 mx-3 rounded-xl">
            <Link className="text-xl font-semibold" to='/products'>SeaShop</Link>
            <Link className="text-3xl font-semibold bg-white text-blue-700 text-center h-9  w-9 rounded-lg p-1 relative" to="/checkout">
            <MdShoppingCart/>
            {!!state.itemsCounter &&
             <span className="text-[0.9rem] w-5 h-5 leading-5 bg-black text-white rounded-full absolute -top-3 -right-3">
             {state.itemsCounter}
             </span>}
            </Link>
        </header>
        {children}
        <footer className="text-center bg-blue-700 p-5 m-3 mt-16 rounded-lg">
            <p className="text-xl font-semibold text-white">Developed By Hamed Mahjoobi</p>
        </footer>
    </>
  )
}

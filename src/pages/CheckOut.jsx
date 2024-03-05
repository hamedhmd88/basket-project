import React from 'react'
import { useCart } from '../context/CartProvider'
import BasketCard from '../components/BasketCard';
import empty from "../assets/preview-removebg-preview.png"
import BasketSidbar from '../components/BasketSidbar';

function CheckOut() {
  const {state, dispatch} = useCart();

  // اگر سبک خرید خالی بود
  if(!state.itemsCounter) {
    return (
      <div className='flex flex-col justify-center items-center'>
        <p className='text-2xl mb-5 text-blue-800 font-bold italic'>Basket is Empty !!!</p>
        <img className='w-full h-[600px]' src={empty} alt="empty" />
      </div>
    )
  }

  // مقادیر تایپ و پی لوود در کلیک هندلر که به عنوان پراپس به دیپر کامپوننت ها دادیم و مقدار تایپ همونی که تایپ کردیم و مقدار پیلوور از دیتا میگیرد که در کامپوننت بسکت کارد دریافت میکنیم
  const clickHandler = (type, payload) => {
    dispatch({type: type, payload: payload});
  }
  return (
    <div className="flex justify-between items-start p-2 min-h-[1000px]">
      <BasketSidbar state={state} clickHandler={clickHandler}/>
      <div  className="w-full">
      {state.selectedItems.map((product) => (
       <BasketCard key={product.id} data={product} clickHandler={clickHandler}/>
      ))}
      </div>
      
    </div>
  )
}

export default CheckOut

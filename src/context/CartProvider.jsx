import { useContext, useReducer } from "react";
import { createContext } from "react"
import { sumProducts } from "../helper/helper";


const cartContext = createContext();

const initialState = {
  selectedItems: [], // آیتم های انتخابی کالا
  itemsCounter: 0, // مجموع آیتم های انتخابی
  total: 0, // مجموع قیمت آیتم ها 
  checkout: false // وضعیت پرداخت
};

const reducer = (state, action) => {
    switch (action.type) {
      //با استفاده از ایف میاییم میبینیم اون آیدی انتخابی کاربر اگر داخل سلکت آیتم نبود آن آیتم را پوش میکنیم داخل آرایه و با استفاده اسپرید اوپریتور مقادیر قبلیشم هم ینی تعداد قبلی های آن آیتم هم قرار میدهیم و با کوانتیتی یک هر بار یکی از آن آیتم اضافه میکنیم و در قسمت ریترن در سلکتدآیتم تمام محصولات وارد شده را نشان میدهیم و با استفاده از فانکشن سام پروداکت که در هلپر ساختیم تمام مقادیر و مجموع قیمتهای آیتم ها را نمایش میدهیم
      case "ADD_ITEM":
        if(!state.selectedItems.find(item => item.id === action.payload.id)) {
            state.selectedItems.push({...action.payload , quantity : 1 });
        }
        return{
          selectedItems: [...state.selectedItems], // or can be write ...state
          ...sumProducts(state.selectedItems), // مقادیر آیتمز کانتر و توتال در هلپر تعریف شدن با همان نام های آیتم کانتر و توتال در اینجا  و با اسپرد کردن تمام مقادیر قبلی هم حساب میکنیم
          checkout: false,
        };
        // در اینجا برای ریموو کردن آیتم با استفاده از متد فیلتر استفاده میکنیم
        case "REMOVE_ITEM" :
          const newSelectedItes = state.selectedItems.filter((item) => item.id !== action.payload.id);
          return {
            ...state, // نشان دادن مقادیر قبلی
            selectedItems:[...newSelectedItes], // مقادیری که حذف شده
            ...sumProducts(newSelectedItes), // مقادیر حذف شده قیمت و تعدادش هم در سام پوروداکت قرار میدهیم تا تعداد و قیمتش هم کاهش یابد
          };
          // در اینجا در ادامه کیس ادد آیتم میخواهیم اگر کاربر یک کالا یکسان در چندبار انتخاب کرد فقط مقدار کوانتیتی آن تغیر پیدا کند
            case "INCREASE" :
            // از متد فایندایندکس استفاده میکنیم تا ایندکس آرایه را پیدا کنیم و براساس ایندکس آن محصول که تغییری نمیکند کوانتیتی را اضافه میکنیم
            const increaseIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[increaseIndex].quantity++; // در آرایه ایندکس محصول و کوانتینی آن را افزایش بده
            return {
              ...state,
              ...sumProducts(state.selectedItems)
            };
            // مانند بالا یک اکشن دیگر برای کاهش تعدادها میسازیم
            case "DECREASE" :
              const decreaseIndex = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            state.selectedItems[decreaseIndex].quantity--; 
            return {
              ...state,
              ...sumProducts(state.selectedItems)
            };
            case "CHCKOUT" :
              return {
                selectedItems: [], // آیتم های انتخابی کالا
                itemsCounter: 0, // مجموع آیتم های انتخابی
                total: 0, // مجموع قیمت آیتم ها 
                checkout: true // وضعیت پرداخت
              };
               
      default:
        throw new Error("Invalid Action!");
    }
};


function CartProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <cartContext.Provider value={{state, dispatch}}>
        {children}
    </cartContext.Provider>
  )
};
export const useCart = () => {
    return useContext(cartContext);
}

export default CartProvider

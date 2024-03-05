import { Link, useParams } from 'react-router-dom'
import { useProductDetails } from '../context/ProductsProvider';
import Loader from '../components/Loader';

import {SiOpenproject } from "react-icons/si";
import {IoMdPricetag } from "react-icons/io";
import {FaArrowLeft } from "react-icons/fa";

function DetailsPage() {
  // از یوزپارامز برای دسترسی به جزییات محصول استفاده میکنیم
  const {id} = useParams();
  
  
  // کاستوم هوک یوزپروداکتدیتیلز را ایمپورت میکنیم و آیدی از یوزپارامز که گرفتیم را به عنوان ورودی میدهیم و مثبت میزاریم تا مقدار آیدی به عدد تبدیل شود چون مقدار اولیه آن یک رشته است
  const productDetails = useProductDetails(+id);
  

    if(!productDetails) return <Loader/>;
  

  return (
    <>
            <div className=' flex items-start min-h-[1000px] w-full'>
              <img 
              className='w-[300px] py-4 px-6 bg-white border-2 border-dashed border-[#0D3CCA] rounded-[50px] m-2 mr-10'
              src={productDetails.image} 
              alt={productDetails.title}/>
              <div className='w-full border-2 border-dashed border-[#0D3CCA] m-2 p-6 rounded-[50px]'>
                <h3 className='text-[#0D3CCA] text-2xl mb-10 font-medium'>
                {productDetails.title}
                </h3>
                <p className='text-gray-600 w-[500px] text-lg mb-10'>
                {productDetails.description}
                </p>
                <p className='mb-2 flex items-center font-medium'>
                <span className='text-blue-800 mr-3 text-[18px]'>
                <SiOpenproject/>
                </span>
                {productDetails.category}
                </p>
                <div className='flex justify-between'>
                  <span className='mb-2 flex items-center font-medium'>
                  <span className='text-blue-800 mr-3 text-[18px]'><IoMdPricetag/></span>
                  {productDetails.price} $
                  </span>
                  <Link 
                  className='flex items-center bg-blue-700 text-white py-1 px-2 rounded-xl relative transition-all duration-500 hover:-translate-x-5 hover:scale-105 hover:shadow-2xl'
                  to="/products">
                    <span className='mr-2'><FaArrowLeft/></span>
                    <span>Back to shop</span>
                  </Link>
                </div>
              </div>
            </div>
            
           
    </>
  )
}

export default DetailsPage

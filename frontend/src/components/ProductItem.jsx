import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>
      <div className=' overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out w-full h-[300px] object-cover rounded-lg' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <div className='flex flex-row justify-between'>
      <p className=' text-l font-medium'> {currency}{price}</p>
      <p className='font-medium text-red-500'>Festive Sale</p>
      </div>
      <p className='text-sm font-medium flex flex-row gap-1'>M.R.P:<p className=' text-sm font-medium line-through decoration-1'>{currency}{Math.round(price+(0.3*price))}</p></p>
    </Link>
  )
}

export default ProductItem

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { useNavigate } from 'react-router-dom';

const LatestCollection = () => {
    const navigate = useNavigate();
    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    const handleNavigation = () => {
        navigate('/collection');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our latest blue pottery collection—crafted with elegance, tradition, and timeless artistry for you.
          </p>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <div key={index} className='max-w-xs mx-auto'>
                            <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                        </div>
                    ))
                }
            </div>
            <div className="mt-10 flex justify-center items-center">
            <button
              onClick={handleNavigation}
              className='bg-black text-white px-8 py-3 text-l active:bg-gray-700'
            >
              Explore Our Products
            </button>
            </div>
    </div>
  )
}

export default LatestCollection

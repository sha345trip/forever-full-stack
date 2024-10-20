import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import Reviews from '../components/Reviews';
import axios from 'axios';


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext); // Add isLoggedIn to check login status
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State to track if product is added to cart

  const navigate = useNavigate(); // Initialize navigate
  const handleNavigation = () => {
    navigate('/cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    addToCart(productData._id, size);
    setIsAddedToCart(true); // Enable "Go To Cart" button after adding to cart
  };
  const sendMetaEvent = async () => {
    try {
        const eventData = {
            data: [
                {
                    event_name: "Purchase",
                    event_time: Math.floor(new Date() / 1000), // Current time in seconds
                    action_source: "website",
                    user_data: {
                        em: [
                            "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068" // Example email hash
                        ],
                        ph: [
                            null // Placeholder for phone number
                        ]
                    },
                    custom_data: {
                        currency: "USD",
                        value: "142.52" // Purchase value
                    },
                    original_event_data: {
                        event_name: "Cart",
                        event_time: Math.floor(new Date() / 1000) // Current time in seconds
                    }
                }
            ]
        };

        const response = await axios.post('http://localhost:4000/api/meta/event', eventData);
        console.log('Meta Event Sent:', response.data);
    } catch (error) {
        console.error('Failed to send Meta event:', error);
    }
};
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- Product Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>
          <div>
          <p className='mt-3 text-xl text-white font-medium bg-red-500 inline-block border-red-700 rounded-md px-2 py-1'>Festive Sale</p>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className=' mt-2 text-xl font-medium flex flex-row gap-2'>M.R.P:<p className=' text-xl font-medium line-through'>{currency}{Math.round(productData.price+(0.3*productData.price))}</p></p>
          </div>
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>{productData.category === 'Candles' ? 'Select Fragrance' : 'Select Color'}</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className='flex gap-4'>
            <button
              onClick={() => {
                handleAddToCart();
                sendMetaEvent();
              }} // Add to cart and enable "Go to Cart" button
              className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
            >
              ADD TO CART
            </button>

            {/* Go To Cart Button */}
            <button
              onClick={handleNavigation} // Navigate to /cart page on click
              className={`bg-black text-white px-8 py-3 text-sm ${!isAddedToCart ? 'cursor-not-allowed opacity-50' : 'active:bg-black'}`}
              disabled={!isAddedToCart} // Disable button if product is not added to cart
            >
              GO TO CART
            </button>
          </div>
          <h1 className='font-medium text-2xl mt-2'>Product Details</h1>
          <div 
              className='mt-5 text-black md:w-4/5' 
              dangerouslySetInnerHTML={{ __html: productData.description }} 
            />

          
          </div>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Easy return and exchange policy within 7 days.<a href='/refund' className='text-black'> Click Here</a> to know more.</p>
            <img src={assets.band}/>
          </div>
        </div>
      </div>

      {/* --------- display related products ---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
      <Reviews/>
    </div>
  ) : <div className='opacity-0'></div>;
};

export default Product;
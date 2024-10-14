import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const validCoupons = {
        'SAVE10': 10,
        'SAVE20': 20,
        'FESTIVE30': 30,
    };

    const applyCoupon = () => {
        if (validCoupons[couponCode]) {
            setDiscount(validCoupons[couponCode]);
            toast.success(`Coupon applied! You get ${validCoupons[couponCode]}% off.`);
        } else {
            setDiscount(0);
            toast.error('Invalid coupon code.');
        }
    };

    const getTotalAmountWithDiscount = () => {
        const subt = getCartAmount();
        const disc = (subt * discount / 100).toFixed(2);
        let totalAmount = (subt + delivery_fee).toFixed(2);
        if(subt >=499){
            totalAmount = subttoFixed(2);
        }
        return totalAmount - disc;
    };

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setFormData(data => ({ ...data, [name]: value }))
    }
    const isEligible = false;
    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name:'Order Payment',
            description:'Order Payment',
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response)
                try {
                    
                    const { data } = await axios.post(backendUrl + '/api/order/verifyRazorpay',response,{headers:{token}})
                    if (data.success) {
                        navigate('/orders')
                        setCartItems({})
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error)
                }
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open()
    }
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
        "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", 
        "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", 
        "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
        "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
      ];
      
    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {

            let orderItems = []

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getTotalAmountWithDiscount()
            }
            

            switch (method) {

                // API Calls for COD
                case 'cod':
                    // const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
                    // if (response.data.success) {
                    //     setCartItems({})
                    //     navigate('/orders')
                    // } else {
                    //     toast.error(response.data.message)
                    // }
                    if (!isEligible) {
                        alert('Not eligible for Cash on Delivery');
                      } else {
                        setMethod('cod');
                      }
                    break;

                case 'stripe':

                    const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
                    if (responseStripe.data.success) {
                        const {session_url} = responseStripe.data
                        window.location.replace(session_url)
                    } else {
                        toast.error(responseStripe.data.message)
                    }
                    break;

                case 'razorpay':

                    const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {headers:{token}})
                    if (responseRazorpay.data.success) {
                        initPay(responseRazorpay.data.order)
                    }
                    else {
                        toast.error('Please Login First')
                    }
                    break;

                default:
                    break;
            }


        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* ------------- Left Side ---------------- */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>

                <div className='flex gap-3'>
                    <input 
                    required 
                    onChange={onChangeHandler} 
                    name='firstName' 
                    value={formData.firstName} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='text' 
                    placeholder='First name' 
                    />
                    <input 
                    required 
                    onChange={onChangeHandler} 
                    name='lastName' 
                    value={formData.lastName} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='text' 
                    placeholder='Last name' 
                    />
                </div>

                <input 
                    required 
                    onChange={onChangeHandler} 
                    name='email' 
                    value={formData.email} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='email' 
                    placeholder='Email address' 
                />
                
                <input 
                    required 
                    onChange={onChangeHandler} 
                    name='street' 
                    value={formData.street} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='text' 
                    placeholder='Street' 
                />

                <div className='flex gap-3'>
                    <input 
                    required 
                    onChange={onChangeHandler} 
                    name='city' 
                    value={formData.city} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='text' 
                    placeholder='City' 
                    />
                    
                    <select 
                    required 
                    onChange={onChangeHandler} 
                    name='state' 
                    value={formData.state} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                    >
                    <option value=''>Select State</option>
                    {indianStates.map((state) => (
                        <option key={state} value={state}>
                        {state}
                        </option>
                    ))}
                    </select>
                </div>

                <div className='flex gap-3'>
                    <input 
                    required 
                    onChange={onChangeHandler} 
                    name='zipcode' 
                    value={formData.zipcode} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='number' 
                    placeholder='Zipcode' 
                    />
                    <input 
                        name='country' 
                        value='India' 
                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full bg-gray-100 cursor-not-allowed' 
                        type='text' 
                        placeholder='Country' 
                        disabled 
                        />
                </div>

                <input 
                    required 
                    onChange={onChangeHandler} 
                    name='phone' 
                    value={formData.phone} 
                    className='border border-gray-300 rounded py-1.5 px-3.5 w-full' 
                    type='number' 
                    placeholder='Phone' 
                />
                </div>

            {/* ------------- Right Side ------------------ */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    {/* Apply Coupon Section */}
                <div className="mt-8">
                    <Title text1={'APPLY'} text2={'COUPON'} />
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                            placeholder="Enter coupon code"
                            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        />
                        <button
                            type="button"
                            onClick={applyCoupon}
                            className="bg-blue-500 text-white px-4 py-2 text-sm"
                        >
                            Apply Coupon
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------- Right Side ------------------ */}
            <div className='mt-8'>

                <div className='mt-8 min-w-80'>
                    <CartTotal discount={discount}/>
                </div>
                </div>

                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    {/* --------------- Payment Method Selection ------------- */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        {/* <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                        </div> */}
                        <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                            <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                        </div>
                        <div
                            onClick={() => setMethod('cod')}
                            className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${!isEligible ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                            <p
                                className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' && isEligible ? 'bg-green-400' : ''}`}
                            ></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
                            <p className="text-red-500 text-xs font-medium">Not Eligible</p>
                            </div>
                    </div>
                    <div className='w-full text-end mt-8'>
                        <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
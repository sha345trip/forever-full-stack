import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
    const [method, setMethod] = useState('razorpay');
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [isCouponApplied, setIsCouponApplied] = useState(false);

    const validCoupons = {
        "SAVE10": 10,
        "SAVE20": 20
    };

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
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const applyCoupon = () => {
        if (validCoupons[coupon]) {
            setDiscount(validCoupons[coupon]);
            setIsCouponApplied(true);
            toast.success(`Coupon applied! You saved ₹${validCoupons[coupon]}`);
        } else {
            toast.error('Invalid coupon!');
            setDiscount(0);
            setIsCouponApplied(false);
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            let orderItems = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items));
                        if (itemInfo) {
                            itemInfo.size = item;
                            itemInfo.quantity = cartItems[items][item];
                            orderItems.push(itemInfo);
                        }
                    }
                }
            }

            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee - discount
            };

            // Payment methods
            if (method === 'razorpay') {
                const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } });
                if (responseRazorpay.data.success) {
                    initPay(responseRazorpay.data.order);
                }
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
            {/* Left Side */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

                <div className='text-xl sm:text-2xl my-3'>
                    <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
                    <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
                </div>
                <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
                <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
                    <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
                    <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                </div>
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
            </div>

            {/* Right Side */}
            {/* Right Side */}
<div className='mt-8'>
    {/* Coupon Section */}
    <div className="my-6">
        <Title text1={'APPLY'} text2={'COUPON'} />
        <div className='flex items-center gap-2'>
            <input
                type="text"
                className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                disabled={isCouponApplied}
            />
            <button
                type="button"
                onClick={applyCoupon}
                className='bg-gray-700 text-white px-6 py-2'
                disabled={isCouponApplied}
            >
                {isCouponApplied ? "Applied" : "Apply"}
            </button>
        </div>
        {isCouponApplied && <p className="text-green-600 mt-2">Coupon applied successfully!</p>}
    </div>

    {/* Cart Total Section */}
    <div className='mt-8 min-w-80'>
        <CartTotal discount={discount} />
    </div>

                {/* Payment Method */}
                <div className='mt-12'>
                    <Title text1={'PAYMENT'} text2={'METHOD'} />
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                            <p className='text-gray-500 text-sm font-medium mx-4'>PAY NOW</p>
                        </div>
                    </div>

                    <div className='w-full text-end mt-8'>
                        <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;

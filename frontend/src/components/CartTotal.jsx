import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = ({ discount = 0 }) => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    // Calculate the total after applying the discount
    const subtotal = getCartAmount();
    const total = subtotal + delivery_fee - discount; // Total = Subtotal + Delivery Fee - Discount

    return (
        <div className='w-full'>
            {/* Title */}
            <div className='mb-4'>
                <Title text1="CART" text2="TOTALS" />
            </div>

            {/* Price Breakdown */}
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between text-base text-gray-700'>
                    <p>Subtotal</p>
                    <p>{currency} {subtotal.toFixed(2)}</p>
                </div>
                <hr className='border-t border-gray-300' />
                <div className='flex justify-between text-base text-gray-700'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee.toFixed(2)}</p>
                </div>
                <hr className='border-t border-gray-300' />
                {discount > 0 && ( // Show discount if any
                    <div className='flex justify-between text-base text-green-600'>
                        <p>Discount</p>
                        <p>- {currency} {discount.toFixed(2)}</p>
                    </div>
                )}
                <hr className='border-t border-gray-300' />
                <div className='flex justify-between text-lg font-semibold text-gray-900'>
                    <b>Total</b>
                    <b>{currency} {(total < 0 ? 0 : total).toFixed(2)}</b> {/* Ensure total does not go below zero */}
                </div>
            </div>
        </div>
    );
};

export default CartTotal;

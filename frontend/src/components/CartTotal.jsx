import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = ({ discount = 0 }) => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    // Calculate the subtotal and total after applying the discount
    const subtotal = getCartAmount();
    const effectiveDeliveryFee = subtotal === 0 
        ? 0 
        : subtotal >= 499 
        ? 0 
        : delivery_fee;

    const total = subtotal*(1-(discount/100)) + effectiveDeliveryFee; // Total = Subtotal + Delivery Fee - Discount

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
                
                {/* Shipping Fee */}
                <div className='flex justify-between text-base text-gray-700'>
                    <p>Shipping Fee</p>
                    <p>{currency} {effectiveDeliveryFee.toFixed(2)}</p>
                </div>
                <hr className='border-t border-gray-300' />

                {/* Display Discount (if applicable) */}
                {discount > 0 && (
                    <div className='flex justify-between text-base text-green-600'>
                        <p>Discount</p>
                        <p>- {currency} {Math.round(subtotal * (discount / 100))}</p>
                    </div>
                )}
                <hr className='border-t border-gray-300' />

                {/* Total */}
                <div className='flex justify-between text-lg font-semibold text-gray-900'>
                    <b>Total</b>
                    {/* Ensure total does not go below zero */}
                    <b>{currency} {(total > 0 ? total : 0).toFixed(2)}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;

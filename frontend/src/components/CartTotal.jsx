import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = ({ discount }) => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    // Calculate the total after applying the discount
    const subtotal = getCartAmount();
    const total = subtotal + delivery_fee - discount; // Total = Subtotal + Delivery Fee - Discount

    return (
        <div className='w-full'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {subtotal}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                {discount > 0 && ( // Show discount if any
                    <div className='flex justify-between text-green-600'>
                        <p>Discount</p>
                        <p>- {currency} {discount}.00</p>
                    </div>
                )}
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {total < 0 ? 0 : total}.00</b> {/* Ensure total does not go below zero */}
                </div>
            </div>
        </div>
    );
};

export default CartTotal;

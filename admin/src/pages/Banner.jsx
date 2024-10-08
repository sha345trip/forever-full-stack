import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Banner = ({ token }) => {
    const [image1, setImage1] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!image1) {
            toast.error("Please upload an image before submitting.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("image1", image1);

            const response = await axios.post(
                `${backendUrl}/api/product/banner`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}` // Ensure token format is correct
                    }
                }
            );

            if (response.data.success) {
                toast.success(response.data.message);
                setImage1(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error); 
            // Log the full error details for debugging
            if (error.response) {
                console.log("Error Response Data:", error.response.data);
                console.log("Error Status:", error.response.status);
                console.log("Error Headers:", error.response.headers);
                toast.error(error.response.data.message || "An error occurred.");
            } else {
                toast.error("Network error or server is down.");
            }
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
            <div>
                <p className='mb-2'>Upload Image</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                        <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
                    </label>
                </div>
            </div>
            <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
        </form>
    )
}

export default Banner;

import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate for redirection

const Edit = ({ token }) => {
  const { productId } = useParams(); // Get product ID from URL
  const navigate = useNavigate(); // For redirecting after edit
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  // Image states
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Vases');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Fetch the product data when the component loads
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/product/${productId}`, {
          headers: { token },
        });
        const product = response.data.product;
        setProductData(product);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setBestseller(product.bestseller);
        setSizes(product.sizes || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error.response ? error.response.data : error.message);
        toast.error('Failed to fetch product data');
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId, token]);

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      // Append images only if new images have been uploaded
      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.put(`${backendUrl}/api/product/update/${productId}`, formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success('Product updated successfully');
        navigate('/products'); // Redirect to products page after successful update
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Failed to update product');
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator when fetching data
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      {/* Image Upload Section */}
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          {[image1, image2, image3, image4].map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                className='w-20'
                src={image ? URL.createObjectURL(image) : productData?.images?.[index] || assets.upload_area}
                alt="Product Preview"
              />
              <input
                onChange={(e) => {
                  if (index === 0) setImage1(e.target.files[0]);
                  if (index === 1) setImage2(e.target.files[0]);
                  if (index === 2) setImage3(e.target.files[0]);
                  if (index === 3) setImage4(e.target.files[0]);
                }}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name Input */}
      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2'
          type="text"
          placeholder='Type here'
          required
        />
      </div>

      {/* Product Description Input */}
      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full max-w-[500px] px-3 py-2'
          placeholder='Write content here'
          required
        />
      </div>

      {/* Category and Price Fields */}
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className='w-full px-3 py-2'
          >
            <option value="Vases">Vases</option>
            <option value="Plates & Mugs">Plates & Mugs</option>
            <option value="Decoratives">Decoratives</option>
            <option value="Lamps">Lamps</option>
            <option value="Candles">Candles</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full px-3 py-2 sm:w-[120px]'
            type="number"
            placeholder='25'
            required
          />
        </div>
      </div>

      {/* Dynamic Field for Sizes/Fragrances based on Category */}
      {category !== "Candles" ? (
        <div>
          <p className='mb-2'>Product Colors</p>
          <div className='flex gap-3'>
            {["Yellow", "Light Blue", "Green"].map((color) => (
              <div
                key={color}
                onClick={() => setSizes((prev) =>
                  prev.includes(color) ? prev.filter((item) => item !== color) : [...prev, color]
                )}
              >
                <p className={`${sizes.includes(color) ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
                  {color}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className='mb-2'>Product Fragrances</p>
          <div className='flex gap-3'>
            {["Lavender", "Vanilla", "Rose"].map((fragrance) => (
              <div
                key={fragrance}
                onClick={() => setSizes((prev) =>
                  prev.includes(fragrance) ? prev.filter((item) => item !== fragrance) : [...prev, fragrance]
                )}
              >
                <p className={`${sizes.includes(fragrance) ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>
                  {fragrance}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bestseller Checkbox */}
      <div className='flex gap-4 items-center'>
        <input
          onChange={() => setBestseller(!bestseller)}
          type="checkbox"
          id='bestseller'
          checked={bestseller}
        />
        <label htmlFor="bestseller">Add to bestseller</label>
      </div>

      {/* Submit Button */}
      <button type="submit" className='text-white bg-blue-500 px-5 py-2'>Update Product</button>
    </form>
  );
};

export default Edit;
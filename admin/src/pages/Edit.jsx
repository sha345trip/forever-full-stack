import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill'; // Import react-quill
import 'react-quill/dist/quill.snow.css'; 
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate

const Edit = ({ token }) => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate(); // For redirecting after edit

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Vases');
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  // Fetch product data by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(
          `${backendUrl}/api/product/single`, 
          { productId: id }
        );
        if (response.data.success) {
          const product = response.data.product;
          setName(product.name);
          setDescription(product.description);
          setPrice(product.price);
          setCategory(product.category);
          setBestseller(product.bestseller);
          setSizes(product.sizes);
          const [img1, img2, img3, img4] = product.image;
          setImage1(img1 || false);
          setImage2(img2 || false);
          setImage3(img3 || false);
          setImage4(img4 || false);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };

    fetchProduct();
  }, [id]);

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

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.put(
        `${backendUrl}/api/product/edit/${id}`, // Use PUT for updates
        formData,
        { headers: { token, 'Content-Type': 'multipart/form-data' } } // Ensure correct headers
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/list'); // Redirect to the product list after successful edit
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img
              className='w-20'
              src={!image1 ? assets.upload_area : typeof image1 === 'string' ? image1 : URL.createObjectURL(image1)}
              alt=''
            />
            <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='image1' hidden />
          </label>
          <label htmlFor='image2'>
            <img
              className='w-20'
              src={!image2 ? assets.upload_area : typeof image2 === 'string' ? image2 : URL.createObjectURL(image2)}
              alt=''
            />
            <input onChange={(e) => setImage2(e.target.files[0])} type='file' id='image2' hidden />
          </label>
          <label htmlFor='image3'>
            <img
              className='w-20'
              src={!image3 ? assets.upload_area : typeof image3 === 'string' ? image3 : URL.createObjectURL(image3)}
              alt=''
            />
            <input onChange={(e) => setImage3(e.target.files[0])} type='file' id='image3' hidden />
          </label>
          <label htmlFor='image4'>
            <img
              className='w-20'
              src={!image4 ? assets.upload_area : typeof image4 === 'string' ? image4 : URL.createObjectURL(image4)}
              alt=''
            />
            <input onChange={(e) => setImage4(e.target.files[0])} type='file' id='image4' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <ReactQuill value={description} onChange={setDescription} className='w-full max-w-[500px]' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
            <option value='Vases'>Vases</option>
            <option value='Plates & Mugs'>Plates & Mugs</option>
            <option value='Decoratives'>Decoratives</option>
            <option value='Lamps'>Lamps</option>
            <option value='Candles'>Candles</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className='w-full px-3 py-2 sm:w-[120px]'
            type='number'
            placeholder='25'
            required
          />
        </div>
      </div>

      {category !== "Candles" ? (
        <div>
          <p className='mb-2'>Product Colors</p>
          <div className='flex gap-3'>
            <div onClick={() => setSizes(prev => prev.includes("Yellow") ? prev.filter(item => item !== "Yellow") : [...prev, "Yellow"])}>
              <p className={`${sizes.includes("Yellow") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Yellow</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Light Blue") ? prev.filter(item => item !== "Light Blue") : [...prev, "Light Blue"])}>
              <p className={`${sizes.includes("Light Blue") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Light Blue</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Green") ? prev.filter(item => item !== "Green") : [...prev, "Green"])}>
              <p className={`${sizes.includes("Green") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Green</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className='mb-2'>Product Fragrances</p>
          <div className='flex gap-3'>
          <div onClick={() => setSizes(prev => prev.includes("Lavender") ? prev.filter(item => item !== "Lavender") : [...prev, "Lavender"])}>
              <p className={`${sizes.includes("Lavender") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Lavender</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Vanilla") ? prev.filter(item => item !== "Vanilla") : [...prev, "Vanilla"])}>
              <p className={`${sizes.includes("Vanilla") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Vanilla</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Rose") ? prev.filter(item => item !== "Rose") : [...prev, "Rose"])}>
              <p className={`${sizes.includes("Rose") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Rose</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Sandalwood") ? prev.filter(item => item !== "Sandalwood") : [...prev, "Sandalwood"])}>
              <p className={`${sizes.includes("Sandalwood") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Sandalwood</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Jasmine") ? prev.filter(item => item !== "Jasmine") : [...prev, "Jasmine"])}>
              <p className={`${sizes.includes("Jasmine") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Jasmine</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Coffee") ? prev.filter(item => item !== "Coffee") : [...prev, "Coffee"])}>
              <p className={`${sizes.includes("Coffee") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Coffee</p>
            </div>
            <div onClick={() => setSizes(prev => prev.includes("Beach") ? prev.filter(item => item !== "Beach") : [...prev, "Beach"])}>
              <p className={`${sizes.includes("Beach") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Beach</p>
            </div>
          </div>
        </div>
      )}

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller((prev) => !prev)} checked={bestseller} type='checkbox' id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'>
          Add to Bestseller
        </label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>
        UPDATE
      </button>
    </form>
  );
};

export default Edit;

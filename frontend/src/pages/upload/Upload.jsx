import React, { useState, useEffect } from 'react'
import './upload.css'
import axios from 'axios';

import icoupload from '../../assets/icoupload.svg'
function Upload() {
  const [fileName, setFileName] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')

  const handleFileChange = (event) => {
    const { files } = event.target;
    if (files[0]) {
      setFileName(files[0]);
    }
  };

  useEffect(() => {
    if (fileName) {
      setImage(URL.createObjectURL(fileName));
    }
  }, [fileName]);


  const handleUpload = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    try {
      const formData = new FormData();
      formData.append('file', fileName);
      formData.append('title', title);
      formData.append('description', description);

      const response = await axios.post('http://localhost:3000/api/data', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File upload successful:', response.data);
      setFileName(null);
      setImage(null);
      setTitle('');
      setDescription('');
      // Handle the response data as needed
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle the error
    }
  };


  return (
    <div className='basis-3/4'>
      <form className='flex flex-col gap-10 justify-center items-center' onSubmit={handleUpload}>
        <label htmlFor="upload" className="upload-label" >Upload File</label>

        <div className='aspect-video w-8/12 grid place-items-center shadow-lg' onClick={() => document.getElementById('upload').click()} onChange={handleFileChange}>
          {image ? <img src={image} alt="" className='h-full dark:invert-[0.86]' /> : <img src={icoupload} alt="" className='h-full' />}

          <input type="file" id="upload" className='hidden' accept='image/*' required /></div>
        <input type="text" name="" id="" value={title} placeholder='enter title' className='w-8/12 shadow-lg h-8' onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="" id="" value={description} placeholder='enter description' className='w-8/12 shadow-lg h-8' onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Upload
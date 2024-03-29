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
        <label htmlFor="upload" className="upload-label text-2xl dark:text-white" >Upload File</label>

        <div className='sm:h-80 sm:w-80 h-60 w-60 grid place-items-center shadow-lg overflow-hidden' onClick={() => document.getElementById('upload').click()} onChange={handleFileChange}>
        <img src={image ? image : icoupload} alt="" className={`${image ? 'dark:invert-0' : 'dark:invert'}`} />
          <input type="file" id="upload" className='hidden' accept='image/*' required />
        </div>
        <input type="text"  name="" id="" value={title} placeholder='enter title' className='w-8/12 shadow-lg h-8 p-5 text-lg' onChange={(e) => setTitle(e.target.value)} required />
        <textarea   name="" id="" rows="5" cols="50" value={description} placeholder='enter description' className='w-8/12 shadow-lg p-5 text-lg' onChange={(e) => setDescription(e.target.value)} required > </textarea>
        <button type="submit" className='bg-gray-900 py-1 rounded-lg text-lg text-white mt-5 dark:bg-white dark:text-gray-900  px-4 mb-9'>Submit</button>
      </form>
    </div>
  )
}

export default Upload
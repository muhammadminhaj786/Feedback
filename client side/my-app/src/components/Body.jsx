import React, { useState } from 'react'
import './Body.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Body = () => {

  const [data, setData] = useState('')
  const navigate = useNavigate()

  const feedData = async()=>{
    
  } 

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log('hello')
    console.log(data)
    const response = await axios.post('http://localhost:8080/api/feedback/',{comments: data})
    console.log(response.data.status)
    if (response.data.status === true) {
      navigate('/submit')
    } else {
      console.log('not submit')
    }
  }

  return (
   <div className='parent h-[100vh] w-[100%] flex justify-center items-center'>
        <div className='h-[450px] w-[650px] child  '>
           <div className='w-[80%] mx-auto'>
           <p className='text-center text-[white] text-[34px] font-bold mt-10'>Submit Your Feedback!</p>
           <p className='text-[white] text-[18px] text-center mt-2'>Your comments are important for usand are crucial in helping us provide the best teaching.</p>
           <textarea onChange={(e)=>setData(e.target.value)} className='h-[80px] w-[100%] bg-[#2d4052] mt-10 text-[white] border-none' name="" id="" placeholder='Enter Your Comments'></textarea>
            <br />
           {/* <input type="email" required placeholder='' /> */}
           <button onClick={(e)=>handleSubmit(e)} className='h-[75px] w-[100%] bg-[white] text-[20px] font-bold text-[#4CA1AF] rounded-[5px] mt-5 hover:bg-[#2C3E50] hover:text-[white] duration-1000'>Submit</button>
           </div>
        </div>
   </div>
  )
}

export default Body
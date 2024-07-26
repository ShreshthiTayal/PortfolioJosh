import React from 'react'
import "../App.css";

const ContactForm = () => {
  return (
  <div className='h-[759px]'>  
  <h1 className='text-[2rem] font-bold mb-9'>Leave ME Your Info</h1>
    <form
  className="flex flex-col gap-7   p-7  bg-white mb-10 w-[846px] h-[673px]"
 
>

    <div className="flex flex-col gap-2">
    <label htmlFor="fullname" className="text-[#767676] font-medium text-[18px]">
      Your Full Name (Required)
    </label>
    <input
      type="fullname"
      name="fullname"
      id="fullname"
     
   className="w-full outline-none rounded-[0.5rem] bg-[#F0F0F6] p-[12px] text-richblack-5"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="email" className="text-[#767676] font-medium text-[18px]">
     Your Email (Required)
    </label>
    <input
      type="email"
      name="email"
      id="email"
     
   className="w-full outline-none rounded-[0.5rem] bg-[#F0F0F6] p-[12px] text-richblack-5"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="sufullname" className="text-[#767676] font-medium text-[18px]">
     Subject
    </label>
    <input
      type="subject"
      name="subject"
      id="subject"
   className="w-full outline-none rounded-[0.5rem] bg-[#F0F0F6] p-[12px] text-richblack-5"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="message" className="text-[#767676] font-medium text-[18px]">
  Your Message
    </label>
    <textarea
      name="message"
      id="message"
      cols="30"
      rows="7"
    
      className="w-full outline-none rounded-[0.5rem] bg-[#F0F0F6] p-[12px] text-richblack-5"
      
    />
    
  </div>

  <button
  
    type="submit"
    className="rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] font-bold text-black w-[170px] " 
   
  >
SEND MESSAGE
  </button>
</form></div>
 
  )
}

export default ContactForm

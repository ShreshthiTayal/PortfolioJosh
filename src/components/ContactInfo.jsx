import React from 'react'
import location from "../assets/location.png";
import Mobile from "../assets/Mobile.png";
import mail from "../assets/mail.png";

const ContactInfo = () => {
  return (
<div className='h-[759px]'>
<h1 className='text-[2rem] font-bold mb-9'>Contact Information</h1>
<div className='flex flex-col justify-between bg-[#F0F0F6] h-[673px]  w-[373px]'>
      
      <div className='w-[372.7px] h-[211.11px] bg-white p-2'>
      <div className='w-[60px] h-[60px] rounded-full mx-auto my-5 bg-yellow-400 flex'>  <img src={location} className='w-[25px] h-[25px] mx-auto self-center'/>
       </div>
       <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Country</p>
        <p className='text-[#767676] font-normal text-[1rem]'>India</p>
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>City</p>
        <p className='text-[#767676] font-normal text-[1rem]'>Saharanpur</p>
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Street</p>
        <p className='text-[#767676] font-normal text-[1rem]'>RaghavPuram</p>
      </div>
      
      </div>

      

      <div className='w-[372.7px] h-[211.11px] bg-white p-2'>
      <div className='w-[60px] h-[60px] rounded-full mx-auto my-5 bg-yellow-400 flex'>  <img src={mail} className='w-[25px] h-[25px] mx-auto self-center'/>
       </div>
       <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Email:</p>
        <p className='text-[#767676] font-normal text-[1rem]'>abc@gmail.com</p>
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Skype</p>
        <p className='text-[#767676] font-normal text-[1rem]'>Saharanpur</p>
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Telegram</p>
        <p className='text-[#767676] font-normal text-[1rem]'>RaghavPuram</p>
      </div>
       </div>

       <div className='w-[372.7px] h-[211.11px] bg-white p-2'>
      <div className='w-[60px] h-[60px] rounded-full mx-auto my-5 bg-yellow-400 flex'>  <img src={Mobile} className='w-[25px] h-[25px] mx-auto self-center'/>
       </div>
       <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Support Services:</p>
        <p className='text-[#767676] font-normal text-[1rem]'>15369</p>
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Office:</p>
        <p className='text-[#767676] font-normal text-[1rem]'>+918528596384</p>
      </div>

      <div className='flex justify-between px-4'>
        <p className='text-[#767676] font-medium text-[1.3rem]'>Personal:</p>
        <p className='text-[#767676] font-normal text-[1rem]'>+918974521697</p>
      </div>
      
      </div>

    </div>
</div>


  )
}

export default ContactInfo

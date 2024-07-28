import React, { useEffect, useState } from 'react';
import location from "../assets/location.png";
import Mobile from "../assets/Mobile.png";
import mail from "../assets/mail.png";

const ContactInfo = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    // Fetch the contact data from the backend
    fetch('http://localhost:3001/contactData')
      .then(response => response.json())
      .then(data => setContactData(data))
      .catch(error => console.error('Error fetching contact data:', error));
  }, []);
  const imageMap = {
    "location.png": location,
    "mail.png": mail,
    "Mobile.png": Mobile,
  };
  return (
    <div className='h-[759px]'>
      <h1 className='text-[2rem] font-bold mb-9'>Contact Information</h1>
      <div className='flex flex-col justify-between bg-[#F0F0F6] h-[673px] w-[373px]'>
        {contactData.map((section, index) => (
          <div key={index} className='w-[372.7px] h-[211.11px] bg-white p-2'>
            <div className='w-[60px] h-[60px] rounded-full mx-auto my-5 bg-yellow-400 flex'>
              <img src={imageMap[section.icon]} className='w-[25px] h-[25px] mx-auto self-center' alt='icon' />
            </div>
            {section.fields.map((field, idx) => (
              <div key={idx} className='flex justify-between px-4'>
                <p className='text-[#767676] font-medium text-[1.3rem]'>{field.label}</p>
                <p className='text-[#767676] font-normal text-[1rem]'>{field.value}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;

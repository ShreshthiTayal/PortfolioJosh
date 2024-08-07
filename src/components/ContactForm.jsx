import React, { useEffect, useState } from 'react';
import "../App.css";

const ContactForm = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Fetch the form data from the backend
    fetch('http://localhost:3001/formData')
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error('Error fetching form data:', error));
  }, []);

  return (
    <div className='h-[759px]'>
      {formData.filter(item => item.type === "title").map((item, index) => (
        <h1 key={index} className='text-[2rem] font-bold mb-9'>{item.text}</h1>
      ))}
      <form className="flex flex-col gap-7 p-7 bg-white mb-10 w-[846px] h-[673px]">
        {formData.filter(item => item.type !== "title" && item.type !== "button").map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label htmlFor={item.name} className="text-[#767676] font-medium text-[18px]">
              {item.label}
            </label>
            {item.type === "textarea" ? (
              <textarea
                name={item.name}
                id={item.name}
                cols="30"
                rows="7"
                className="w-full outline-none rounded-[0.5rem] bg-[#F0F0F6] p-[12px] text-richblack-5"
              />
            ) : (
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                className="w-full outline-none rounded-[0.5rem] bg-[#F0F0F6] p-[12px] text-richblack-5"
              />
            )}
          </div>
        ))}
        {formData.filter(item => item.type === "button").map((item, index) => (
          <button
            key={index}
            type="submit"
            className="rounded-md bg-yellow-400 px-6 py-3 text-center text-[13px] font-bold text-black w-[170px]"
          >
            {item.text}
          </button>
        ))}
      </form>
    </div>
  );
}

export default ContactForm;

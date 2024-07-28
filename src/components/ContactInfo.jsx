import location from "../assets/location.png";
import Mobile from "../assets/Mobile.png";
import mail from "../assets/mail.png";

const ContactInfo = () => {
  const contactData = [
    {
      icon: location,
      fields: [
        { label: "Country", value: "Bangladesh" },
        { label: "City", value: "Dhaka" },
        { label: "Street", value: "35 Vhatara, Badda" }
      ]
    },
    {
      icon: mail,
      fields: [
        { label: "Email:", value: "Youremail@Gmail.Com" },
        { label: "Skype", value: "@Yourusername" },
        { label: "Telegram", value: "@Yourusername" }
      ]
    },
    {
      icon: Mobile,
      fields: [
        { label: "Support Services:", value: "15369" },
        { label: "Office:", value: "+58 (021)356 587 235" },
        { label: "Personal:", value: "+58 (021)356 587 235" }
      ]
    }
  ];

  return (
    <div className='h-[759px]'>
      <h1 className='text-[2rem] font-bold mb-9'>Contact Information</h1>
      <div className='flex flex-col justify-between bg-[#F0F0F6] h-[673px] w-[373px]'>
        {contactData.map((section, index) => (
          <div key={index} className='w-[372.7px] h-[211.11px] bg-white p-2'>
            <div className='w-[60px] h-[60px] rounded-full mx-auto my-5 bg-yellow-400 flex'>
              <img src={section.icon} className='w-[25px] h-[25px] mx-auto self-center' alt='icon' />
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

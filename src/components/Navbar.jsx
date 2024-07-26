import { useState } from 'react'
import "../App.css";
import Rectangle from "../assets/Rectangle_181.png" 
const headings=[
    {
        id:"1",
        title:"Home",
      },
      {
        id:"2",
        title:"Skills",
      },
      {
        id:"3",
        title:"Education",
      },
      {
        id:"4",
        title:"Projects",
      },
      {
        id:"5",
        title:"Recommendations",
      },
      {
        id:"6",
        title:"Contact",
      }
]

const Navbar = () => {
const [currentTitle,setCurrentTitle]=useState("1");

  return (

       <nav className="nav">
    <img src={Rectangle} width={158} height={76}/>
     <ul className="ul" >
     {
     headings.map((title,index)=>{
       
        return(
            <li onClick={()=>setCurrentTitle(title.id)} key={index}><div className={`py-[10px] px-[14px] rounded-[10px] ${currentTitle===title.id?"bg-yellow-300":"bg-white"}`}><a className='navbar_titles' >{title.title}</a></div></li>
        )
     })
     }
     </ul>
     
         </nav>
    
  )
}

export default Navbar;

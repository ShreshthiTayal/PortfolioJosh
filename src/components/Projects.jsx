import imageProject1 from "../assets/images/card1.png";
import imageProject2 from "../assets/images/card2.png"
import imageProject3 from "../assets/images/card3.png"
import imageProject4 from "../assets/images/card4.png"
import imageProject5 from "../assets/images/card5.png"
import imageProject6 from "../assets/images/card6.png"

const Projects = () => {
    const ProjectCard =[
        {
            id:"card1",
            url: imageProject1,
            heading:"How to make Flyer Design",
            desc:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
            tags:["Typescript","ReactJs","NextJs","CSS","HTML","MongoDB"]
        },
        {
          id:"card2",
            url: imageProject2,
            heading:"How to make Flyer Design",
            desc:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
            tags:["Typescript","ReactJs","NextJs","CSS"]
        },
        {
          id:"card3",
          url: imageProject3,
          heading:"How to make Flyer Design",
          desc:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
          tags:["Typescript","ReactJs","NextJs","CSS","HTML","MongoDB"]
      },
      {
        id:"card4",
        url: imageProject4,
        heading:"How to make Flyer Design",
        desc:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
        tags:["Typescript","ReactJs","NextJs","CSS","HTML","MongoDB"]
    },
    {
      id:"card5",
      url: imageProject5,
      heading:"How to make Flyer Design",
      desc:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
      tags:["Typescript","ReactJs","NextJs","CSS","HTML","MongoDB"]
    },
    {
      id:"card6",
      url: imageProject6,
      heading:"How to make Flyer Design",
      desc:"Lorem ipsum dolor sit amet, consec adipiscing elit awd and lorem ipsum...",
      tags:["Typescript","ReactJs","NextJs","CSS","HTML","MongoDB"]
    }
    ];

  return (

    <div className=' bg-[#F0F0F6]'>
   <h1 className='text-center font-medium text-[2rem] mx-auto mb-5'>Projects</h1>
   <p className='text-center  text-[#767676] my-5 w-[600px] mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam minus itaque, iste qui cumque sunt minima vero modi aut nulla alias velit omnis, atque sint architecto, quibusdam rerum quia molestiae.</p>
        <div className='flex w-[1245px] flex-wrap gap-[45px] mb-14 mx-auto'>{
      ProjectCard.map((project,index)=>{
        return(
            <div className='w-[385px] border-[2px] rounded-[12px] flex flex-col gap-1 bg-white boxShadow-customLight
h-[432.5px]' key={index}>
                <img className="w-[385px] h-[256px] " src={project.url}/>
                <h1 className='font-medium text-2xl mx-3' >{project.heading}</h1>
                <p className='text-[#767676] text-[18px] mx-3'>{project.desc}</p>
                <div className='flex gap-2 flex-wrap mx-3'>
                {
                    project.tags.map((tag,index)=>{
                        return(
                            <div className=' max-w-max px-4 py-1 rounded-3xl bg-[#EFEFEF]' key={index}>{tag}</div>
                        )

                    })
                }
                </div>
             
            </div>
        )
      })
       } 
         </div>
    </div>
    
  )
}

export default Projects

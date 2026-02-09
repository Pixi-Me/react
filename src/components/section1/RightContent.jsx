import React from 'react'
import Card from './Card'

const RightContent = () => {
  const arr = [
    {
      img:'/src/assets/tom.jpg',
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
    },
    {
      img:"/src/assets/doodle.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem"
    },
    {
      img:"/src/assets/spiderMan.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      
    }
    ,
    {
      img:"/src/assets/cat.jpg",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      
    }
    ,
    {
      img:"/src/assets/fifth.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      
    }
    ,
    {
      img:"/src/assets/sixth.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      
    }
    ,
    {
      img:"/src/assets/seventh.jpg",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
       
    }
  ]
  return (
    <div className='w-[70%] h-auto flex gap-5 flex-nowrap overflow-x-scroll  overflow-y-visible [&::-webkit-scrollbar]:w-0'>
     {
      arr.map((item,index)=>{
        return(
          <Card num={index+1} img={item.img} txt={item.txt} btn={item.btn}/>
        )
      })
     }
    </div>
  )
}

export default RightContent

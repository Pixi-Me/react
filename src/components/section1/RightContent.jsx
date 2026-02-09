import React from 'react'
import Card from './Card'

const RightContent = () => {
  const arr = [
    {
      img:'/src/assets/tom.jpg',
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:1
    },
    {
      img:"/src/assets/doodle.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:2
    },
    {
      img:"/src/assets/spiderMan.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:3
    }
    ,
    {
      img:"/src/assets/cat.jpg",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:3
    }
    ,
    {
      img:"/src/assets/fifth.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:3
    }
    ,
    {
      img:"/src/assets/sixth.png",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:3
    }
    ,
    {
      img:"/src/assets/seventh.jpg",
      txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?",
      btn:"Lorem",
      index:3
    }
  ]
  return (
    <div className='w-[70%] h-auto flex gap-5 flex-nowrap overflow-x-scroll  overflow-y-visible [&::-webkit-scrollbar]:w-0'>
     {
      arr.map((item)=>{
        return(
          <Card num={item.index} img={item.img} txt={item.txt} btn={item.btn}/>
        )
      })
     }
    </div>
  )
}

export default RightContent

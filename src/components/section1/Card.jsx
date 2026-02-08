import React from 'react'

const Card = (props) => {
  return (
    <div className='relative w-[30%] rounded-4xl inset-0 overflow-hidden h-[80vh'>
      <img className='object-cover h-full w-full' src={props.img} alt="" />
      <div className='absolute flex py-5 px-5 flex-col justify-between top-0 left-0 h-full w-full '>
        <span className='rounded-[50%] w-8 h-8 bg-white px-2 text-2xl'>
          1
        </span>
        <div className='text-white'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tenetur aspernatur inventore impedit? Odio, ea?
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Card

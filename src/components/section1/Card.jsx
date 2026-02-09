import React from 'react'

const Card = (props) => {
  return (
    <div className='shrink-0 relative w-[30%] rounded-4xl inset-0 overflow-hidden h-[80vh]  transition-all duration-300 ease-in-out hover:scale-95'>
      <img className='object-cover h-full w-full' src={props.img} alt="" />
      <div className='absolute flex py-5 px-5 flex-col justify-between top-0 left-0 h-full w-full '>
        <span className='rounded-[50%] h-fit w-fit flex justify-center items-center px-2 bg-white  text-2xl'>
          <div className=''>
            {props.num}
          </div>
        </span>
        <div className='text-white flex-col flex'>
          <div>
            {props.txt} 
          </div>
          <div className='reltive  mt-10 mb-5 flex justify-between items-center gap-0 group transition-all duration-300 ease-in-out'>
            <button className='text-xl bg-blue-500 min-w-[70%] rounded-xl  h-10 group-hover:bg-blue-900 group-hover:cursor-pointer group-hover:shadow-[0px_0px_16px_rgba(0,0,0)]
            transition-all duration-300 ease-in-out'>
              {props.btn}
            </button>
            <div className='bg-blue-500 rounded-2xl absolute left-[60%] min-w-[20%] h-3 group-hover:bg-blue-900
            group-hover:cursor-pointer 
            transition-all duration-300 ease-in-out'>

            </div>
            <div className='text-3xl px-2 rounded-[60%] h-10 bg-blue-500 w-[40% group-hover:bg-blue-900
            group-hover:cursor-pointer group-hover:shadow-[0px_0px_16px_rgba(0,0,0)]
            transition-all duration-300 ease-in-out'>
              <i class="ri-arrow-right-long-line"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'

const LeftContent = () => {
  return (
    <div className='max-w-[25%] min-w-300px pt-[5%] h-[82vh] flex-col flex justify-between'>
      <div>
        <div className='text-5xl font-bold pb-8'>
            Prospetive customer segmentation
        </div>
        <div className='text-lg text-black/70'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum quae. Voluptas illum voluptatem possimus! Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div className='text-6xl hover:text-white hover:bg-black rounded-3xl hover:shadow-[0px_0px_8px_black] w-fit transition-all ease-in-out duration-500 hover:cursor-pointer'>
        <i class="ri-arrow-right-up-long-line"></i>
      </div>
    </div>
  )
}

export default LeftContent

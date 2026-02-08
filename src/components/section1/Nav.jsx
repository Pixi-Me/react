import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Nav = () => {
  return (
    <div className='pt-[1.5%] pb-[3%] flex justify-between items-center'>
      <div className='bg-black rounded-full px-3 py-1 text-white hover:cursor-pointer'>
        Target Audience
      </div>
      <div className='bg-black/10 rounded-full px-5 py-1 text-sm'>
        <i class="ri-corner-down-right-fill"></i>Digital Banking Platform
      </div>

    </div>
  )
}

export default Nav

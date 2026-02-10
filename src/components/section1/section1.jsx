import React from 'react'
import Nav from './nav'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Section1 = () => {
  return (
    <div className='h-screen w-full bg-white pt-2  px-[3%]'>
      <Nav/>
      <div className='flex-col flex lg:flex-row  gap-10'>
        <LeftContent />
        <RightContent/>
      </div>
      
    </div>
  )
}

export default Section1

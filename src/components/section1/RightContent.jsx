import React from 'react'
import Card from './Card'

const RightContent = () => {
  return (
    <div className='w-[70%] flex gap-5'>
      <Card img="\src\assets\tom.jpg" />
      <Card/>
      <Card/>
    </div>
  )
}

export default RightContent

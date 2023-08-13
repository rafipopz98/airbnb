'use client'
import Image from 'next/image'
import React from 'react'
import  inb from '../favicon.ico'
const Avatar = () => {
  return (
    <Image className='rounded-full height="30" width="30" alt="avatar' src={inb} />
  )
}

export default Avatar
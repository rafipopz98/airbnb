'use client'
import React, { useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import Menuitems from './Menuitems'
const UserMenu = () => {
    const [isOpen,setIsOpen]=useState(false);
    const toggleOpen=useCallback(()=>{
        setIsOpen((value)=>!value);
    },[])
  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
            <div onClick={()=>{}}
                className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
>airbnb your home
            </div>
<div
onClick={toggleOpen}
className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row gap-3 rounded-full cursor-pointer hover:shadow-md transition'
>
<AiOutlineMenu />
</div>
<div  className='hidden md:block'>
<Avatar />
</div>
        </div>

        {
            isOpen&&(
                <div className='absolute rounded-xl shadow-md w-[40vw] bg-white overflow-hidden ring-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Menuitems onClick={()=>{}}
                        label="Login" />
                        <Menuitems onClick={()=>{}}
                        label="sign up" />
                    </div>
                </div>
            )
        }

    </div>
  )
}

export default UserMenu
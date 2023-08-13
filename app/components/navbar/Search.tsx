'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'
const Search = () => {
  return (
    <div className=
    'border-[1px] w-full  md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>
            <div className='text-sm font-semibold px-6'>
                anywhere
            </div>
            <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                any week

            </div>
            <div className='text-sm pl-6 pr-2 flex text-gray-600 gap-3 flex-row items-center'>
                <div className='hidden sm:block'>
                    add guests
                </div>
                <div className='p-2 bg-rose-500 rounded-full px6'>
                    <BiSearch />
                </div>
            </div>
        </div>

    </div>

  )
}

export default Search
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchBar() {
  return (
    <div className='w-[100%]'>
        <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
            <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>

            <input className='flex grow items-center h-[100%] rounded-l text-black' type="text" />
            <button className='w-[45px]'>
                <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900'/>
            </button>
        </div>
    </div>
  )
}

export default SearchBar
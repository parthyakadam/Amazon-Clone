import React from 'react'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { SearchBar } from './'

function NavBar() {
  return (
    <header className='min-w-[1000px]'>
        <div className='flex bg-amazonclone text-white h-[60px]'> 
            {/* Left Content */}
            <div className='flex items-center m-4'>
                <img className='h-[35px] w-[100px] m-2' src="../images/amazon.png" alt="" />
                <div className='pl-4 pr-4'>
                    <div className='text-xs xl:text-sm'>Deliver to</div>
                    <div className='text-sm xl:text-base font-bold'>India</div>
                </div>
            </div>

            {/* Middle Content */}
            <div className='flex flex-grow relative items-center'>
                <SearchBar />
            </div>

            {/* Right Content */}
            <div className='flex items-center m-4'>
                <div className='pl-4 pr-4'>
                    <div className='text-xs xl:text-sm'>Hello, sign in</div>
                    <div className='text-sm xl:text-base font-bold'>Accounts & Lists</div>
                </div>
                <div className='pl-4 pr-4'>
                    <div className='text-xs xl:text-sm'>Returns</div>
                    <div className='text-sm xl:text-base font-bold'>& Orders</div>
                </div>
                <div className="flex pr-3 pl-3">
                    <ShoppingCartIcon className='h-[48px]'/>
                    <div className="mt-7 text-xs xl:text-sm font-bold">
                        Cart
                    </div>
                </div>
            </div>
        </div>
        <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registery</div>
            <div>GIft Cards</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default NavBar
import React from 'react'

export default function SearchBar() {
    return (
        <div className='max-w-7xl mx-auto'>
        
          <div className="relative mt-1 flex px-4 items-center">
            <input
              type="text"
              name="search"
              id="search"
              placeholder='Write Something'
              className="block w-full h-16 rounded-xl bg-light-bg border-gray-300 pr-12 shadow-sm focus:border-my-orange focus:ring-my-orange sm:text-sm"
            />
            <div className="absolute inset-y-0 right-6 flex py-1.5 pr-1.5">
             <button className='bg-my-orange px-4 py-2 rounded-xl text-white'>
                Search
             </button>
                         </div>
          </div>
        </div>
      )
}

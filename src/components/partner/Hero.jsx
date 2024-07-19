import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[200px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[200px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>This is the Partner's Banner</h1>
            </div>
            <img className='w-full max-h-[200px] object-cover' src="https://wallpapercave.com/wp/wp3067059.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero
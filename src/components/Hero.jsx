import React from 'react'

const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Find Your <span className='text-red-500'>Stylist</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-red-500'>Create Your </span> Style</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://wallpapercave.com/wp/wp3067059.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero
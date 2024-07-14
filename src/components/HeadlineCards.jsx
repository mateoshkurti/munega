import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Get Back to the Basics</p>
          <p className='px-2'>Offers Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://mcdn.wallpapersafari.com/medium/70/11/lxrJoV.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Discover the New You</p>
          <p className='px-2'>New Studios Added Daily</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://haircutinspiration.com/wp-content/uploads/Thin-Pocky-Brush-Up-with-Low-Drop-fade.jpeg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Thrive in Style</p>
          <p className='px-2'>Ladies, Look Here</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Book Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://wallpaperaccess.com/full/2892163.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;

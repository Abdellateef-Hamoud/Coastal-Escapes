import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg'
        alt='Tropical Beach'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p className='mix-blend-color-dodge text-lg uppercase tracking-wider'>
            All-Inclusive Escapes
          </p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl mix-blend-exclusion'>
            Private Beaches & Getaways
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl mix-blend-color-dodge'>
            Discover hidden coastal gems, luxurious beachfront villas, and serene hideaways. 
            Your perfect escape from the everyday hustle starts here.
          </p>
          <button className='bg-white text-black px-6 py-2 mt-4 rounded-md font-semibold hover:bg-gray-200 transition'>
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

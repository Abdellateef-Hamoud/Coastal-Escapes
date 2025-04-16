import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-20 px-4 grid lg:grid-cols-2 gap-8 bg-gradient-to-br from-white to-blue-50'>
      
      {/* Image Grid */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh] gap-2'>
        {[
          'https://images.unsplash.com/photo-1506929562872-bb421503ef21',
          'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a',
          'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7',
          'https://images.unsplash.com/photo-1468413253725-0d5181091126',
          'https://images.unsplash.com/photo-1473186578172-c141e6798cf4',
        ].map((url, i) => (
          <img
            key={i}
            className={`object-cover w-full h-full p-1 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${
              i === 0 || i === 3 ? 'row-span-3' : 'row-span-2'
            }`}
            src={`${url}?auto=format&fit=crop&w=1400&q=80`}
            alt={`Beach ${i + 1}`}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className='flex flex-col h-full justify-center'>
        <p className='text-xl tracking-widest uppercase text-gray-500 mb-2'>Unforgettable Journeys</p>
        <h3 className='text-5xl md:text-6xl font-bold text-gray-900 leading-tight'>
          Plan Your Perfect Escape
        </h3>
        <p className='text-2xl py-6 text-gray-700'>
          Discover handpicked private beaches and hidden gems curated for luxury, privacy, and unforgettable moments.
        </p>
        <p className='pb-6 text-gray-600'>
          Whether you’re dreaming of sunrise yoga by the ocean, candlelit dinners on the sand, or simply unwinding in paradise — we’re here to make it happen. Let us help you design your personalized getaway experience.
        </p>
        <div className='flex flex-wrap gap-4'>
          <button className='px-6 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300'>
            Learn More
          </button>
          <button className='px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-white hover:text-black border border-black transition-all duration-300'>
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;

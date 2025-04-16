import React from 'react';

const Rooms = () => {
  return (
    <div>
      <div className='max-w-[1400px] h-[500px] bg-cover bg-center relative mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80")' }}>
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>

        {/* Left Section: Text */}
        <div className='lg:top-20 relative lg:col-span-1 col-span-2 z-10'>
          <h3 className='text-2xl font-bold text-white shadow-lg'>Elegant & Spacious Rooms</h3>
          <p className='pt-4 text-lg text-white shadow-lg'>
            Discover our luxurious rooms with contemporary decor, ideal for a relaxing and memorable stay. Each room is designed to offer the utmost comfort and privacy.
          </p>
        </div>

        {/* Right Section: Images */}
        <div className='grid grid-cols-2 col-span-2 gap-5'>
          <img
            className='object-cover w-full h-full rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl'
            src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
            alt='Room 1'
          />
          <img
            className='row-span-2 object-cover w-full h-full rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl'
            src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='Room 2'
          />
          <img
            className='object-cover w-full h-full rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl'
            src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='Room 3'
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;

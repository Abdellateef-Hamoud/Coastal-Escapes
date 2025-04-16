import React from 'react';
import { FaUmbrellaBeach, FaTag, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';

const offersData = [
  {
    icon: <FaUmbrellaBeach size={28} className="text-[#1e88e5]" />,
    text: 'Exclusive Beachfront Deals',
  },
  {
    icon: <FaTag size={28} className="text-[#43a047]" />,
    text: 'Unbeatable Private Rates',
  },
  {
    icon: <FaExchangeAlt size={28} className="text-[#fb8c00]" />,
    text: 'Flexible Booking Options',
  },
  {
    icon: <FaShieldAlt size={28} className="text-[#d81b60]" />,
    text: 'Complimentary Travel Insurance',
  },
];

const Offers = () => {
  return (
    <div className='w-full py-16 px-4 bg-gradient-to-br from-blue-100 via-white to-teal-100'>
      <div className='max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {offersData.map((offer, index) => (
          <div
            key={index}
            className='bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300'
          >
            <div className=''>{offer.icon}</div>
            <p className='text-lg font-semibold text-gray-800'>{offer.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;

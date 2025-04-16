import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercase pt-2 text-white'>Solutions</h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>Travel</li>
            <li className='py-1 hover:text-gray-500'>Booking</li>
            <li className='py-1 hover:text-gray-500'>Flights</li>
            <li className='py-1 hover:text-gray-500'>Cruises</li>
            <li className='py-1 hover:text-gray-500'>Ground</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 text-white'>Support</h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>Pricing</li>
            <li className='py-1 hover:text-gray-500'>Documentation</li>
            <li className='py-1 hover:text-gray-500'>Tours</li>
            <li className='py-1 hover:text-gray-500'>Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 text-white'>Company</h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>About</li>
            <li className='py-1 hover:text-gray-500'>Blog</li>
            <li className='py-1 hover:text-gray-500'>Jobs</li>
            <li className='py-1 hover:text-gray-500'>Press</li>
            <li className='py-1 hover:text-gray-500'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase pt-2 text-white'>Legal</h6>
          <ul>
            <li className='py-1 hover:text-gray-500'>Claims</li>
            <li className='py-1 hover:text-gray-500'>Privacy</li>
            <li className='py-1 hover:text-gray-500'>Terms</li>
            <li className='py-1 hover:text-gray-500'>Policies</li>
            <li className='py-1 hover:text-gray-500'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase text-white'>Subscribe to our newsletters</p>
          <p className='py-4 text-gray-400'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-3 mr-4 rounded-md mb-4 border-2 border-gray-600 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500' type='email' placeholder='Enter email..' />
            <button className='p-3 mb-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4 text-white'>2022 Coastal Escapes. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook className='hover:text-blue-500 transition-all duration-300 cursor-pointer' />
          <FaInstagram className='hover:text-pink-500 transition-all duration-300 cursor-pointer' />
          <FaTwitter className='hover:text-blue-400 transition-all duration-300 cursor-pointer' />
          <TiSocialPinterest className='hover:text-red-500 transition-all duration-300 cursor-pointer' size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

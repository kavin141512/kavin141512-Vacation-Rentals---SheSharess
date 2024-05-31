import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-around'>
      <div className='text-center md:text-left mb-8 md:mb-0'>
        <div><h1><Link to={'/'} className='text-xl md:text-2xl'>SheShares</Link></h1></div>
        <h1><Link to={'/aboutus'} className='text-gray-500 text-sm md:text-base'>About Us</Link></h1>
        <h1><Link to={'/Careers'} className='text-gray-500 text-sm md:text-base'>Careers</Link></h1>
        <h1><Link to={'/Contactus'} className='text-gray-500 text-sm md:text-base'>Contact Us</Link></h1>
      </div>

      <div className='text-center md:text-left mb-8 md:mb-0'>
        <div><h1><Link to={'/'} className='text-xl md:text-2xl'>Support</Link></h1></div>
        <h1><Link to={'/aboutus'} className='text-gray-500 text-sm md:text-base'>FAQS</Link></h1>
        <h1><Link to={'/Careers'} className='text-gray-500 text-sm md:text-base'>Cancellation policy</Link></h1>
      </div>

      <div className='text-center md:text-left mb-8 md:mb-0'>
        <div><h1><Link to={'/'} className='text-xl md:text-2xl'>Become a Host</Link></h1></div>
        <h1><Link to={'/'} className='text-gray-500 text-sm md:text-base'>Hosting Resources</Link></h1>
        <h1><Link to={'/'} className='text-gray-500 text-sm md:text-base'>Hosting Responsibility</Link></h1>
        <h1><Link to={'/'} className='text-gray-500 text-sm md:text-base'>Share a Room</Link></h1>
        <h1><Link to={'/'} className='text-gray-500 text-sm md:text-base'>Pets</Link></h1>
      </div>

      <div className='text-center md:text-left'>
        <div><h1><Link to={'/'} className='text-xl md:text-2xl'>Terms & Policy</Link></h1></div>
        <h1><Link to={'/'} className='text-gray-500 text-sm md:text-base'>Terms & Condition</Link></h1>
        <h1><Link to={'/'} className='text-gray-500 text-sm md:text-base'>Privacy Policy</Link></h1>
      </div>
    </div>
    <br/>
    </>
  );
}

export default Footer;

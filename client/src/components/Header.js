import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className='flex w-full h-16 items-center bg-white justify-between'>
      <div className='pl-[5%]' ><Link to={'/'}><h4 className='text-[30px] text-[#474748] font-normal italic '>She<span className='text-[#474748]'>Shares</span></h4></Link></div>
      <div className='w-[25vh] flex  justify-around'>
        <Link to={'/register'} className='text-[20px] hover:text-[red]'>Register</Link>
        <Link to={'/login'} className='text-[20px] hover:text-[red]'>Login</Link>
      </div>
    </nav>
  );
}

export default Header;

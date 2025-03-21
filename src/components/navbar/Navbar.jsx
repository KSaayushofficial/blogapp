import React from 'react'
import Links from './links/Links';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-[100px] flex items-center justify-between'>
      <Link href="/" className='text-[30px] text-white font-bold '>AaYuSh</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar
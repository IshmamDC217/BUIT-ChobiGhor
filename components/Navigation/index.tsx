import Link from 'next/link';
import { BsFillHousesFill } from 'react-icons/bs';

import React from 'react'
import LoginButton from './LoginButton';
import BurgerMenu from './BurgerMenu';

import { navPaths } from './navData';

const Navigation = () => {
  let navLinks = navPaths.map((value, index) => {
    let className = "nav-center-link";
    if (value.isActive) {
      className += " active"
    }
    return (
      <div className={className} key={index}>
        <Link className="navcomp" href={value.path}>
          {value.name}
        </Link>
      </div>
    )
  });

  return (
    <div className='bg-white fixed top-0 w-full z-10'>
      <div className='navbar mx-auto flex justify-between items-center py-4 px-4'>
        <a href="#" className='navcomp hidden md:flex px-2 py-2 mx-2 items-center gap-2'>
          <BsFillHousesFill />
          Nibhrito
        </a>
        <div className='hidden md:flex gap-7 justify-center w-full'>
          {navLinks}
        </div>
        {/* <p>&nbsp;</p> */}

        <LoginButton isDesktopComponent={true} />
        <BurgerMenu />
      </div>
    </div>
  )
}

export default Navigation

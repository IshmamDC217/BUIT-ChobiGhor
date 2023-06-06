import Link from 'next/link';
import { BsFillHousesFill } from 'react-icons/bs';
import { ImMenu } from 'react-icons/im';

import React from 'react'

const Navigation = () => {
  return (
    <div className='bg-white fixed top-0 w-full z-10'>
      <div className='navbar mx-auto flex justify-between items-center py-4 px-4'>
        <div className='hidden md:flex gap-7 justify-center w-full'>
          <div>
            <Link className="navcomp" href='/'>
              Home
            </Link>
          </div>

          <div>
            <Link className="navcomp" href='/'>
              Occasions
            </Link>
          </div>

          <div>
            <Link className="navcomp" href='/'>
              Vacations
            </Link>
          </div>

          <div>
            <Link className="navcomp" href='/'>
              Birthdays
            </Link>
          </div>
        </div>
        {/* <p>&nbsp;</p> */}

        <a href="#" className=' navcomp hidden md:flex border px-2 py-2 mx-2 items-center gap-2'>
          Nibhrito
          <BsFillHousesFill />
        </a>

        <div className='md:hidden'>
          <ImMenu style={{ fontSize: '26px' }} />
        </div>
      </div>
    </div>
  )
}

export default Navigation
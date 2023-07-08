import Link from 'next/link';
import {useState} from 'react';
import { ImMenu } from 'react-icons/im';

import { navPaths } from '../navData'; 

import genericStyles from "../generic.module.css";
import styles from "./styles.module.css";
import LoginButton from '../LoginButton';

function BurgerMenu () {
  const [visibility, setVisibility] = useState(genericStyles.invisible);

  function swapVisibility() {
    return () => setVisibility(visibility === genericStyles.invisible
      ? genericStyles.visible
      : genericStyles.invisible);
  }

  const navLinks = navPaths.map((value, index) => {
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
    <div className='md:hidden'>
      <ImMenu
        style={{ fontSize: '26px' }} 
        onClick={swapVisibility()} 
      />
      <div className={`${styles.menu} ${visibility} flex justify-between`}>
        <div className='top'>
          <div className='flex justify-between'>
            <h1> Browse </h1>
            <button onClick={swapVisibility()}> x </button>
          </div>
          {navLinks}
        </div>
        <LoginButton isDesktopComponent={false} />
      </div>
    </div>
  )
}

export default BurgerMenu;

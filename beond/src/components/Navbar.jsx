import { useState } from 'react';
import styles from '../style';
import { cross, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex py-[1rem] nav_wrapper'>
    <a href='/'>
      <img src={logo} alt='beond' className='w-[48px] h-[48px]'/>
    </a>
        <ul className='list-none md:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`${styles.heading5} navlinks_desktop ${index === navLinks.length -1 ? 'mr-0' : 'mr-[5rem]'}`}>
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center relative w-[100%] ml-[-3rem]'>
          <img 
            src={toggle ? cross : menu}
            alt='menu'
            className='w-[24px] h-[24px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} dropdown-menu rounded-[4px] sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${styles.heading5} navlinks_mobile py-[1rem]`}>
                  <a href={`${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </nav>

  )
}

export default Navbar
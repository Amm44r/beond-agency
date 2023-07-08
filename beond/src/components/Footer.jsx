import React from 'react'
import { logo, vert_line } from '../assets';
import styles from '../style';

const Footer = () => {
  return (
    <div className='flex flex-col w-[100%] items-center mx-auto'>
      <img src={logo} alt='beond' className='w-[48px] h-[48px] my-[2rem]'/>
      <a href='/contact'>
      <button className={`${styles.heading5} mb-[2rem] btn`}>
        Get In Touch
      </button>
      </a>
      <div className='quick_links'> 
        <a href='pages/privacy-policy' className={`${styles.heading6} text-black5 underline`}>Privacy Policy</a>

        <img src={vert_line} alt='vert_line' className='h-[12px]'/>

        <a href='pages/terms-of-service' className={`${styles.heading6} text-black5 underline`}>Terms of Service</a>

        <img src={vert_line} alt='vert_line' className='h-[12px] flex align-middle justify-center'/>

        <a href='pages/disclaimer' className={`${styles.heading6} text-black5 underline`}>Disclaimer</a>

        <img src={vert_line} alt='vert_line' className='h-[12px]'/>
        
        <div className={`${styles.heading6} text-black5`}>© 2023 BEOND</div>
      </div>
    </div>
  )
}

export default Footer
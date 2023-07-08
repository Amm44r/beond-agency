import React from 'react';
import { Navbar, ContactForm } from '../components';
import styles from '../style';
import { logo, vert_line } from '../assets';

const Contact = () => {
  return (
  <div className='bg-background w-full overflow-hidden '>
    <section className={`${styles.paddingX} h-[80px] bg-black`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
      </section>

      <section className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className={`${styles.heading3} ${styles.flexCenter} my-[128px] `}>
          Contact
        </div>
        <div className={`${styles.flexCenter} w-full`}>
            <ContactForm />
        </div>
      </section>

    <section className={`${styles.boxWidth} ${styles.paddingX} bg-black`}>
      <div className='flex flex-col w-[100%] items-center mx-auto'>
        <img src={logo} alt='beond' className='w-[48px] h-[48px] my-[2rem]'/>
        
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
    </section>
  </div>
    

  )
}

export default Contact
import React from 'react'
import styles from '../style';

const Hero = () => {
  return (
    <div className='max-w-[38rem] text-center ss:text-start'>
      <h1 className={`${styles.heading1}`} >
      Personalised Marketing For Your Online Growth
      </h1>
      <p className={`${styles.paragraph} text-black5 pt-[1rem] pb-[2rem]`}>
      We help businesses in the home renovation 
      industry to gain recognition and increase
      their ROI via Paid Advertising
      </p>
      <a href='/contact'>
      <button className={`${styles.heading5} btn`}>
        Get Started
      </button>
      </a>
    </div>
  )
}

export default Hero
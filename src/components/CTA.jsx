import React from 'react'
import styles from '../style';

const CTA = () => {
  return (
    <div className='max-w-[50rem] pt-[4rem] sm:pt-[8rem] text-center ss:text-start'>
      <h2 className={`${styles.heading2}`} >
      Eager To Grow Your Business?
      </h2>
      <p className={`${styles.paragraph} text-black5 pt-[1rem] pb-[2rem]`}>
      Unleash the full potential of your brand with BEOND. 
      Our innovative advertising solutions are designed to drive results and make a lasting impact. 
      Don't miss this opportunity to elevate your brand.
      </p>
      <a href='/contact'>
      <button className={`${styles.heading5} btn`}>
        Get Started
      </button>
      </a>
      
    </div>
  )
}

export default CTA
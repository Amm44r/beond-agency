import React from 'react'
import styles from '../style';
import { one, two, three, four, arrow } from '../assets';

const Process = () => {
  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <div className='flex-col pb-[8rem]'> 
        <h5 className={`${styles.heading5_caps} text-primary text-center`}>
          OUR PROCESS
        </h5>
        <h3 className={`${styles.heading3} text-black text-center`}>
          Streamlined Procedure For Better Results
        </h3>
      </div>
      <div className='process_content w-[100%] justify-between'>
        <div className='process_steps_wrapper'>
          <img src={one} alt="one" className='w-[116px] h-[116px]'/>
          <h4 className={`${styles.heading4} text-center pt-[1rem]`}>Analysis</h4>
        </div>
        <div>
          <img src={arrow} alt='arrow' className='w-[64px] h-[64px] my-[26px]'/>
        </div>
        <div className='process_steps_wrapper'>
          <img src={two} alt="two" className='w-[116px] h-[116px]'/>
          <h4 className={`${styles.heading4} text-center pt-[1rem]`}>Strategy Development</h4>
        </div>
        <div>
          <img src={arrow} alt='arrow' className='w-[64px] h-[64px] my-[26px]'/>
        </div>
        <div className='process_steps_wrapper'>
          <img src={three} alt="three" className='w-[116px] h-[116px]'/>
          <h4 className={`${styles.heading4} text-center pt-[1rem]`}>Implementation</h4>
        </div>
        <div>
          <img src={arrow} alt='arrow' className='w-[64px] h-[64px] my-[26px]'/>
        </div>
        <div className='process_steps_wrapper'>
          <img src={four} alt="four" className='w-[116px] h-[116px]'/>
          <h4 className={`${styles.heading4} text-center pt-[1rem]`}>Monitoring & Adjustment</h4>
        </div>
      </div>
    </div>
  )
}

export default Process
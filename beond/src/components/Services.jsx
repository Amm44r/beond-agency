import React from 'react'
import styles from '../style';
import { ads, web_design, tick, insta_logo, fb_logo, google_logo, figma_logo } from '../assets';

const Services = () => {
  return (
    <div className={`${styles.flexCenter} flex-col`}>
      <div className='flex-col pb-[8rem]'> 
        <h5 className={`${styles.heading5_caps} text-primary text-center`}>
          OUR SERVICES
        </h5>
        <h3 className={`${styles.heading3} text-black text-center`}>
          Expand Your Reach, Increase Your Sales
        </h3>
      </div>
      <div className='services_content'> 
        <div className='services_wrapper'> 
          <div className={`${styles.heading4} pt-[1rem]`}> 
            <h4 className='text-center'>Paid Advertising</h4>
          </div> 
          <div className={`${styles.flexCenter} py-[1rem] md:px-[1rem] px-[0.5rem]`}> 
            <img src={ads} alt='ads' className='w-[64px] h-[64px] '/>
            <div className='md:px-[1rem] px-[0.5rem]'> 
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>Social Ads</h5>
              </div>
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>Strategy Build</h5>
              </div>
            </div>
            <div> 
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>Copywriting</h5>
              </div>
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>Graphic Design</h5>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly mb-[1rem]'> 
            <img src={fb_logo} alt='facebook' className='w-[40px] h-[40px]'/>
            <img src={insta_logo} alt='instagram' className='w-[40px] h-[40px]'/>
            <img src={google_logo} alt='google' className='w-[40px] h-[40px]'/>
          </div>
        </div>
        <div className='services_wrapper'> 
          <div className={`${styles.heading4} pt-[1rem]`}>
            <h4 className='text-center'>Web Design</h4>
          </div> 
          <div className={`${styles.flexCenter} py-[1rem] md:px-[1rem] px-[0.5rem]`}> 
            <img src={web_design} alt='web_design' className='w-[64px] h-[64px]'/>
            <div className='md:px-[1rem] px-[0.5rem]'> 
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>UI/UX Design</h5>
              </div>
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>User Flows</h5>
              </div>
            </div>
            <div> 
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>Prototypes</h5>
              </div>
              <div className='flex py-[0.5rem]'>
                <img src={tick} alt='tick' className='w-[24px] h-[24px]'/>
                <h5 className={`${styles.heading5}`}>Responsive Design</h5>
              </div>
            </div>
          </div>
          <div className='flex justify-evenly mb-[1rem]'> 
            <img src={figma_logo} alt='figma' className='w-[40px] h-[40px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
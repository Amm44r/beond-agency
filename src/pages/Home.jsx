import React from 'react';
import styles from '../style';
import { Navbar, Hero, Scroll, Services, CTA, Process, Footer } from '../components';

const Home = () => (
    <div className='bg-white w-full overflow-hidden '>
      <section className={`${styles.paddingX} bg-image h-[824px]`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        <div className={`${styles.boxWidth} sm:pt-[8rem] pt-[1rem]`}>
          <Hero />
        </div>
      </section>
      
  
      <div className='bg-background flex-col'>
        <section className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter}`}>
          <Scroll />
        </section>
        <section className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY}`}>
          <Services />
        </section>
        <section className={`${styles.paddingX} bg-image_2 h-[514px]`}>
          <CTA />
        </section>
        <section className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY}`}>
          <Process />
        </section>
        <section className={`${styles.boxWidth} ${styles.paddingX} bg-black`}>
          <Footer />
        </section>
      </div>
    </div>
  )
  
  
  export default Home
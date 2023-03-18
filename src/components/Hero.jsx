import React from 'react'
import { discount } from '../assets'
import styles from '../style'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='#home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
      <div className='flex items-center py-[6px] px-4 bg-discount-gradient routeded-[10px] mb-2'>
        <img src={discount} alt='Icon discount' className='w-[32px] h-[32px] ' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount For <span className=' text-white '>1 Month</span> Account
        </p>
      </div>

      <div className='betweenCenter w-full '>
        <h1 className=' flex-1 font-poppins font-semibold ss:leading-[100px] ss:text-[72px] text[52px] text-white '>
          The Next
          <br className='sm:block hidden' />
          <span className=' text-gradient '> Generration </span>
          Payment Methor.
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
    </div>
  </section>
)
export default Hero

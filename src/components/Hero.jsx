import React from 'react'
import { discount, robot } from '../assets'
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
        <h1 className=' flex-1 font-poppins font-semibold ss:leading-[100px] ss:text-[72px] text-[52px] text-white '>
          The Next
          <br className='sm:block hidden' />
          <span className=' text-gradient '> Generration </span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>
      <h1 className=' flex-1 font-poppins font-semibold ss:leading-[100px] ss:text-[72px] text-[52px] text-white '>
        Payment Methor.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
        annual percentage rates, annual fees.
      </p>
    </div>
    <div className=' flex-1 flexCenter md:my-0  my-10 relative'>
      <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      <div className=' absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className=' absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className=' absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
    </div>
    <div className=' ss:hidden flexCenter '>
      <GetStarted />
    </div>
  </section>
)
export default Hero

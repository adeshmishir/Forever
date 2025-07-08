import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
         <img  className='w-full  md:max-w-[450px]' src={assets.about_img} alt="" />
         <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>At Forever is la e comeerse,collection offers stylish,
           high-quality pieces for every occasion, designed to make you feel confident and comfortable.
            We’re dedicated to bringing you the latest trends with a focus on affordability and inclusivity. 
          Explore our collection and discover how fashion can be forever.</p>
           <p>Forever stylish, forever yours—discover the latest trends at Forever is la e comeerse.</p>
            <p className='text-gray-800'>Our Mission</p>
            <p>At Forever is la e comeerse, our mission is to provide a seamless online shopping experience where fashion m, wherever you are</p>
         </div>
      </div>
      <div className='text-4xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>nd materials to create clothing that not only looks great but feels great too. Our dedicated team ensures each
            dards of craftsgn to delivery, </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>nd materials to create clothing that not only looks great but feels great too. Our dedicated team ensures each
            dards of craftsign to delivery, </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service</b>
          <p className='text-gray-600'> nat but feeensures each
            dards of craftsmanship and durabi. From design to delivery, </p>
        </div>
        
      </div>
      <NewsLetterBox/>
      
    </div>
  )
}

export default About

import Image from 'next/image'
import './Sliderheading.css'
import doodle from'./doodle.png'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Sliderheading() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='sliderheadingcont'>
        <p className='subhead' data-aos="fade-right"
     data-aos-easing="ease-out"
     data-aos-duration='700' data-aos-delay='300'>{`Wrong with self-improvement & how we're fixing it`}</p>
        <div className='slidermainheadcont'>
        <p className='mainhead' data-aos="fade-right"
     data-aos-easing="ease-out"
     data-aos-duration='700' data-aos-delay='300'>Self-Improvement. Ugh. </p> 
        <Image className='img' src={doodle} alt='doodle' data-aos="fade-left"
     data-aos-easing="ease-out"
     data-aos-duration='700' data-aos-delay='300'/>
        </div>
    </div>
  )
}

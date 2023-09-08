import React , {useEffect} from 'react'
import Image from 'next/image'
import logo from  './logo.png'
import './Heading.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

export default function Heading() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='container'>
  <div className='carousel-heading' data-aos="fade-right"
     data-aos-offset="300" 
     data-aos-easing="ease-out" data-aos-duration='500'>
    Does this sound familiar 
  </div>
  <Image className='image' src={logo} alt='logo' data-aos="fade-left"
     data-aos-offset="300"  data-aos-duration='2000'/>
  </div>
  )
}

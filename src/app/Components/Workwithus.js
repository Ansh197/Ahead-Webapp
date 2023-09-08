import React ,{useEffect} from 'react'
import './Workwithus.css'
import logo from './Carousel/logo.png'
import Image from 'next/image'
import Workwithusvertical from './Workwithusvertical'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Workwithus = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='wcontainer'>
        <div className='wleftcontainer'>
        <div className='wheading' data-aos="fade-right"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='300'>Work with us</div>
        <div className='wabout'>
            <Image className='waboutimg' src={logo} alt='logo' data-aos="fade-right"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='300'/>
            <div className='waboutheading'>About</div>
            <div className='waboutdescrption'>{`At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. Ans that's what aHead is all about!`}</div>
        </div>
        <div className='wproduct'> 
            <div className='wproductheading'>Product</div>
            <div className='wproductdescrption'>Sure , you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</div>
        </div>
        </div>
        <div className='wrightcontainer'>
            <div className='wwuheading' data-aos="fade-left"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='300'>Ahead</div>
        <Workwithusvertical/>
        </div>
    </div>
  )
}

export default Workwithus

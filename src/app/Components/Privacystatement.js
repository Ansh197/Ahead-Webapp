import React , {useEffect} from 'react'
import Image from 'next/image'
import './Privacystatement.css'
import sign from './sign.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css';

 const Privacystatement = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='pscontainer'>
    <div className='ps1'data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='500'data-aos-delay='300'>We take privacy seriously</div>
    <div className='ps2' data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='300'>Before you get started</div>
    <div className='ps3' data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='300'>{`We don't share your answers with anyone and won't ever tell `}<br/> you which friends said what about you</div>
    <Image src={sign} alt='sign' className='psimg' />
    <a>
    <button className='psbtn'  data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='500'>Start a test</button>
    </a>
    <div className='ps4'data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='200'data-aos-delay='500'>Take only 5 minutes</div>
    </div>
  )
}
export default Privacystatement

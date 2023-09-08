import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual , Autoplay} from 'swiper/modules';
import './VerticalSlider.css'
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/autoplay'

const cards=[
  {
    title:`It's not as easy as 1-2-3`,
    description:'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)'
  },
  {
    title:`Old habits are hard to break.`,
    description:'And bad behaviours die hard. Fortunately,we give you great,science-backed techniques to use.'
  },
  {
    title:`You and your motivation don't have a long-term relationship.`,
    description:'Luckily, we can proactively prepare you for the marathon not just the race. Effective, memorable exercises will help you stick to your goals'
  },
  {
    title:`It's not as easy as 1-2-3`,
    description:'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)'
  },
  {
    title:`Books just don't offer practical solutions`,
    description:`Remember when you learned to ride a bike just by reading ? Yeah, we don't either. We help you tkae concretesmall steps towards your goals. Learning just a bit, then immideately springing into action`
  },
  {
    title:`Inspiration is great, but then what.`,
    description:'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)'
  }
  
  // {
  //   title:`It's not as easy as 1-2-3`,
  //   description:'The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)'
  // }
]

const VerticalSlider = () => {
  return (
    <div className="verticalswiperdiv">
    <Swiper  modules={[Virtual,Autoplay]} direction="vertical"  speed={1000} slidesPerView={3} loop={true} autoplay={{delay:'1000'}} virtual>
        {cards.map((card,index)=> (<SwiperSlide key={card} virtualIndex={index}>
          <div className='verticalslidercard'>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          </SwiperSlide>))}
      
    </Swiper>
    </div>
  );
};

export default VerticalSlider;
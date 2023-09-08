import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual , Autoplay} from 'swiper/modules';
// import { Autoplay } from 'swiper'; 
import './Slider.css'
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/autoplay'

const cardname='card';

const Slider = ({cards}) => {

  return (
    <Swiper className='swiper-fixed-width-100' modules={[Virtual,Autoplay]} spaceBetween={50} speed={3000} slidesPerView={3} loop={true} autoplay={{delay:'0'}} virtual>
        {cards.map((card,index)=> (<SwiperSlide key={card} virtualIndex={index}>
          <div className='card'>
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          </SwiperSlide>))}
      
    </Swiper>
  );
};
export default Slider;
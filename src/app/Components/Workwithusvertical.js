import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual , Autoplay} from 'swiper/modules';
import './Workwithusvertical.css'
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/autoplay'

const cards=[
    {
        title:"Power through, even when the going gets tough",
        description:"We help you spot and work aroung whatever stands in the way, be it bad habits, fears, etc"
    },
    {
        title:"Learn more about who you are and where you want to go",
        description:"We ask right questions to help you better understand why you do things the way you do"
    },
    {
        title:"Play and grow together with others on the same journey",
        description:"Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals! "
    },
    {
        title:"Power through, even when the going gets tough",
        description:"We help you spot and work aroung whatever stands in the way, be it bad habits, fears, etc"
    },
    {
        title:"Master how to make it happen in real life",
        description:"We support you toward ninja level skills with sleek tools such as dry-runs, quizzes, and flashcards."
    }
]

const Workwithusvertical = () => {

  return (
    <Swiper className='swiper-fixed-width-100 swiper-wrapper' direction='vertical' modules={[Virtual,Autoplay]} speed={5000} slidesPerView={3} loop={true} autoplay={{delay:'0'}} virtual>
        {cards.map((card,index)=> (<SwiperSlide key={card} virtualIndex={index}>
          <div className='wwucard'>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          </SwiperSlide>))}
      
    </Swiper>
  );
};
export default Workwithusvertical;
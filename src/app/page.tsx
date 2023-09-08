"use client";
import "./page.css";
import Quotes from "./Components/Quotes";
import Image from "next/image";
import maingpage from "./mainpage.jpg";
import Heading from "./Components/Carousel/Heading";
import secondpage from "./secondpage.jpg";
import Slider from "./Components/Carousel/Slider";
import Sliderheading from "./Components/VerticalSlider/Sliderheading";
import Jobcard from './Components/Jobcard'
import thirdpage from './thirdpage.jpg'
import VerticalSlider from './Components/VerticalSlider/VerticalSlider'
import Privacystatement from './Components/Privacystatement'
import Workwithus from './Components/Workwithus'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const quotes1 = [
  "EQ beats IQ",
  "People with high emotional intelligence [EQ] live more fulfilled lives. They tend to be happier and have healthier relationships.",
  "They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.",
];

const quotes2 = [
  `Be the best you with EQ`,
  "Not having your own emotions under control might be holding you back.",
  "Additionally not understanding those of others stops you from being parent , friend you can be."
];

const jobcard=[
  {title:"Senior Full-Stack Engineer",
tyoe :"Full-time position",
location:"Berlin or remote",
salary : "65k-70k,0.5-1.5% share options"},
{title:"Senior Designer",
tyoe :"Full-time position",
location:"Berlin or remote",
salary : "45k-30k,0.25-0.50% share options"},
{title:"Superstar Intern",
tyoe :"Full-time position",
location:"Berlin or remote",
salary : "20k-24k,0.5-1.5% share options"}
]

const cards = [
  {
    title: "You argue with a colleague",
    description:
      "You get angry and defensive instead of staying open towards a common ground.",
    image: "./icon1.png",
  },
  {
    title: "You get a promotion at work",
    description: `You question yourself and wonder when they'll realise you're an unqualified imposter instead of trusting yourself & your abilities.`,
    image: "./icon2.png",
  },
  {
    title: "You attend a class reunion",
    description:
      "You compare yourself with your peers achievements , instead of making your self-judgement more independent of others.",
    image: "./icon3.png",
  },
  {
    title: "You are at a dinner party",
    description:
      "You play on your phone instead of confidently approaching strangers and striking up a chat.",
    image: "./icon4.png",
  },
  {
    title: "You attend a class reunion",
    description:
      "You compare yourself with your peers achievements , instead of making your self-judgement more independent of others.",
    image: "./icon3.png",
  },
];

export default function Home() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
      <p className="subheading" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-out"
     data-aos-duration='500'>Ahead App</p>
      <div className="heading-cont" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-out"
     data-aos-duration='500'>
        <p>Mastering your life by Mastering your emotions</p>
      </div>
      <Image src={maingpage} alt="mainpage" className="mainpage" />
      <Quotes quotes={quotes1}/>
      <Heading />
      <Slider cards={cards} />
      <p className="subheading2" data-aos="fade-right"
     data-aos-offset="300" 
     data-aos-easing="ease-out" data-aos-duration='500'>Built out of frustration</p>
      <p className="heading-cont2" data-aos="fade-right"
     data-aos-offset="300" 
     data-aos-easing="ease-out" data-aos-duration='500'>Meet the Ahead App</p>
      <p className="description" data-aos="fade-left"
     data-aos-offset="300" 
     data-aos-easing="ease-out" data-aos-duration='500'>
        A personalized pocket coach that provides bite-sized, science driven
        tools to boost emotional intelligence. <br />
        <br /> Think of it as a pocket cheerleader towards a better , more
        fulfilling.{" "}
      </p>
      <Image src={secondpage} alt="secondpage" className="secondpage" />
      <Sliderheading />
      <VerticalSlider/>
      <Quotes quotes={quotes2}/>
      <div className="tpsubhead"  data-aos="zoom-out"
     data-aos-easing="ease-out"
     data-aos-duration='500'>Let your friend, family, and coworkers (anonymously) rate your social skills.</div>
      <div className="tphead" data-aos="zoom-out"
     data-aos-easing="ease-out"
     data-aos-duration='500'>Ever wondered what others think of you?</div>
      <div className="tpcontainer">
        <div className="tpcontcon"  data-aos="zoom-out-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='500'>Answer questions on your social skills</div>
        <div className="tpcontcon"  data-aos="zoom-out-down"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='750'>Let others anonymously answer the same questions about you</div>
        <div className="tpcontcon"  data-aos="zoom-out-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='1000'>Find out where you and others see things the same way - and where not!</div>
      </div>
      <Image src={thirdpage} alt="thirdpage" className="thirdpage" />
      <div className="pbcontainer1">
        <div className="pbp1" data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='500'>You</div>
        <div className="pbp2" data-aos="fade-up"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='1000'>Anonymous 2</div>
      </div>
      <div className="pbcontainer2">
        <div className="pbp3" data-aos="fade-down"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='750'>Anonymous 1</div>
        <div className="pbp4" data-aos="fade-down"
     data-aos-easing="ease-out"
     data-aos-duration='500' data-aos-delay='1250'>Anonymous 3</div>
      </div>
      <Privacystatement/>
      <Workwithus/>
      <div className="jobheading" data-aos="fade-right"
     data-aos-easing="ease-out">Open Vacancies</div>
      <Jobcard jobcard={jobcard}/>
    </>
  );
}

import React, { useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import 'remixicon/fonts/remixicon.css'

import bg from './assets/bg.png';
import sky from './assets/sky.png';
import girlbg from './assets/girlbg.png';
import ps5 from './assets/ps5.png'
import limg from './assets/FuturisticFashionPose.png'

function App() {
  
  let [showContent, setShowContent]=useState(false)
  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.to(".vi-mask-group",//animate particular state
    { rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",

    })
    .to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      //  after completion remove the svg
      onUpdate: function(){
        if(this.progress()>= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();  //stop the animation(timeline) and show thw background
        }
      }
    })
  });

  useGSAP(()=>{

    if(!showContent) return;
    
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",
    })
    gsap.to(".sky",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    })
    gsap.to(".bg",{
      scale:1.1,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut",
    })
    gsap.to(".girl", {
      scale: 1.1,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main=document.querySelector(".main");
    main?.addEventListener("mousemove",function(e){
      const xMove=(e.clientX/ window.innerWidth- 0.5)*40;
      gsap.to(".main .text",{
        x:`${xMove *0.4}%`
      })
      gsap.to(".sky",{
        x:xMove,
      })
      gsap.to(".bg",{
        x:xMove*1.7,
      })
    })
  },[showContent])

  return (
    <>
      <div className="svg fixed top-0 left-0 z-100 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text x={"50%"} y={"50%"} fontSize={250} textAnchor='middle' fill='white' dominantBaseline={'middle'} fontFamily='Arial Black' >VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href={bg}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing relative w-full h-screen bg-black'>
            <div className='nav-bar absolute top-0 left-0 w-full z-[100] py-10 px-10 overflow-hidden' >
              <div className='logo flex flex-row gap-6'>
                <div className='lines flex flex-col gap-[5px]'>
                  <div className='line w-15 h-1.5 bg-white'></div>
                  <div className='line w-8 h-1.5 bg-white'></div>
                  <div className='line w-5 h-1.5 bg-white'></div>
                </div>
                <h3 className='text-4xl -mt-[8px] leading-none text-white'>Rockstar</h3>
              </div>
            </div>
            
            <div className='imagesdiv relative  w-full h-screen overflow-hidden'>
              <img className='absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover' src={sky} />
              <img className='absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover' src={bg} />
              <div className='text text-white absolute flex flex-col gap-2 top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
                <h1 className='text-[6rem] -ml-20 leading-none'>grand</h1>
                <h1 className='text-[6rem] ml-10 leading-none' >theft</h1>
                <h1 className='text-[6rem] -ml-20 leading-none '>auto</h1>
            </div>
              <img className='absolute girl -bottom-[150%] scale-[3] rotate-[-20deg] left-1/2 -translate-x-1/2 object-cover h-full ' src={girlbg} />

            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10  bg-gradient-to-t from-black to-transparent'>
              <div className='flex gap-4 items-center' >
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className='font-[Helvetica_Now_Display] text-xl text-white'>Scroll Down</h3>
              </div>
              <img className='absolute h-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src={ps5} alt="ps5" />
            </div>
          </div>
          <div className='w-full h-screen bg-black flex items-center justify-center'>
            <div className='cntnr text-white flex w-full h-[80%] '>
              <div className='limg relative w-1/2 h-full'>
                <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-40' src={limg} alt="" />
              </div>
              <div className='rg w-[40%] py-10'>
                <h1 className='text-5xl'>Under Progress</h1>
                <h1 className='text-5xl'>Never Settle</h1>
                <p className='mt-10 font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolorum exercitationem qui quidem labore soluta nam amet quod non delectus.</p>
                <p className='mt-5 font-[Helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima debitis ex quaerat consequuntur molestias fugiat labore? Rerum, veniam dolorem.</p>
                <p className='mt-5 font-[Helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero minima debitis ex quaerat consequuntur molestias fugiat labore? Rerum, veniam dolorem.</p>
                <button className='bg-yellow-500 text-2xl text-black px-10 py-5 mt-8'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

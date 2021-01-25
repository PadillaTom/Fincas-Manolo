import React, { useEffect } from 'react';
import { TimelineMax, Expo } from 'gsap';

const WelcomeIntro = () => {
  useEffect(() => {
    // GSAP:
    const tl = new TimelineMax();
    tl.to('.first', 0.6, {
      left: '-100%',
      ease: Expo.easeInOut,
    })
      .to('.second', 0.6, {
        delay: -0.1,
        left: '-100%',
        ease: Expo.easeInOut,
      })
      .to('.third', 0.6, {
        delay: -0.2,
        left: '-100%',
        ease: Expo.easeInOut,
      });
  }, []);
  return (
    <div className='welcomeContainer'>
      <div className='intro first'></div>
      <div className='intro second'></div>
      <div className='intro third'></div>
    </div>
  );
};

export default WelcomeIntro;

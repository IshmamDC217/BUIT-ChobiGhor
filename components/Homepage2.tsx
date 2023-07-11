import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import parxtest from '../public/parxtest.jpg'
import parxtest2 from '../public/parxtest2.jpg'
import parxtest3 from '../public/parxtest3.jpg'

const Homepage2: React.FC = () => {
  return (
    <Parallax className='bg-black' pages={3}>
      <ParallaxLayer offset={0} speed={0.3}>
        <img src={parxtest3.src} alt="First section of image" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <img src={parxtest.src} alt="Second section of image" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.7}>
        <img src={parxtest2.src} alt="Third section of image" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Homepage2;

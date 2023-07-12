import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import parxtest from '../public/parxtest.jpg'
import parxtest3 from '../public/parxtest3.jpg'
import eid from '../public/eid.jpg'
import outings from '../public/outings.jpg'
import gatherings from '../public/gatherings.jpg'
import { BsMoonStarsFill } from 'react-icons/bs'
import { MdFamilyRestroom } from 'react-icons/md'
import { AiFillCar } from 'react-icons/ai'

const Occasions: React.FC = () => {
  return (
    <section>
      <Parallax className='bg-black' pages={2}>
        <ParallaxLayer offset={0} speed={0.3}>
          <img src={parxtest3.src} alt="First section of image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0}>
          <div className='font-bold text-5xl lg:text-9xl' style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto Slab, serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}>
            Occasions
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div>
            <div className='font-bold text-4xl lg:text-8xl' style={{
              position: 'sticky',
              top: '50vh',
              color: '#fff',
              textAlign: 'center',
              fontFamily: 'Roboto Slab, serif',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>
              Dhaka, Bangladesh
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <img src={parxtest.src} alt="Second section of image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontSize: '3em',
          }}>
            <div className="dhakacard flex flex-row justify-center items-center">
              <div className="occasioncard bg-white shadow-lg rounded-2xl w-[500px] py-20 border text-white p-10 mb-5 mx-6" style={{ zIndex: 1 }}>
                <div className='flex row justify-content mx-32 w-[270px]'>
                  <h4 className="text-2xl font-bold mb-4">Eid-al-Fitr</h4>
                  <BsMoonStarsFill className='moon mx-4 my-1 text-xl' />
                </div>
                <img className='border rounded-lg' src={eid.src} />
              </div>
              <div className="occasioncard bg-white shadow-lg rounded-2xl w-[500px] py-20 border text-white p-10 mb-5 mx-6" style={{ zIndex: 1 }}>
                <div className='flex row justify-content mx-24 w-[270px]'>
                  <h4 className="text-2xl font-bold mb-4">Family Gatherings</h4>
                  <MdFamilyRestroom className='fambam mx-4 my-1 text-2xl' />
                </div>
                <img className='border rounded-lg' src={gatherings.src} />
              </div>
              <div className="occasioncard bg-white shadow-lg rounded-2xl w-[500px] py-20 border text-white p-10 mb-5 mx-6" style={{ zIndex: 1 }}>
                <div className='flex row justify-content mx-28 w-[270px]'>
                  <h4 className="text-2xl font-bold mb-4">Family Outings</h4>
                  <AiFillCar className='car mx-4 my-1 text-2xl' />
                </div>
                <img className='border rounded-lg' src={outings.src} />
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Occasions;

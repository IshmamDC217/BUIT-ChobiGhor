import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Homepage: React.FC = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.95, // Adjust the threshold value as per your requirement
  });

  const [ref2, inView2] = useInView({
    threshold: 0.95, // Adjust the threshold value as per your requirement
  });

  const [ref3, inView3] = useInView({
    threshold: 0.95, // Adjust the threshold value as per your requirement
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView1 || inView2 || inView3) {
      setAnimate(true);
    }
  }, [inView1, inView2, inView3]);

  return (
    <section className="flex">
      <div className="w-1/2">
        <div className="pageWrap">
          <div className="famcontainer">
            <div className="backdrop">
              <div className="hero-info">
                <h2 className="my-8">BUIT</h2>
                <h1 className="max-w-5xl font-bold">নিভৃত বাড়িতে স্বাগতম</h1>
                <h3>Banani, Dhaka</h3>
              </div>
              <div className="hero-image hi-1 backgroundTint"></div>
              <div className="hero-image hi-2 backgroundTint"></div>
              <div className="hero-image hi-3 backgroundTint"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="eventcard w-2/3 flex justify-center items-center">
        <div className="flex flex-col items-end">
          <div
            className={`card bg-white shadow-lg rounded-2xl w-[700px] border text-white p-10 mb-5 ${
              animate ? 'animate-slideIn' : ''
            }`}
            ref={ref1}
          >
            <h4 className="text-4xl font-bold mb-4">ছাদ</h4>
            <p className="text-gray-400">Lorem ipsum</p>
          </div>
          <div
            className={`card bg-white shadow-lg rounded-2xl w-[700px] border text-white p-10 mb-5 ${
              animate ? 'animate-slideIn' : ''
            }`}
            ref={ref2}
          >
            <h4 className="text-4xl font-bold mb-4">বাগান</h4>
            <p className="text-gray-400">Lorem ipsum</p>
          </div>
          <div
            className={`card bg-white shadow-lg rounded-2xl w-[700px] border text-white p-10 mb-5 ${
              animate ? 'animate-slideIn' : ''
            }`}
            ref={ref3}
          >
            <h4 className="text-4xl font-bold mb-4">পিছনবাড়ি</h4>
            <p className="text-gray-400">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;

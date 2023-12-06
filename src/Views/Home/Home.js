import React, { useEffect, useRef } from 'react';
import heartStroke from "./assests/heartStroke.mp4";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css"
function Home() {
  const videoRef = useRef(null);
 
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    AOS.init();
  }, []);

  return (
    <div className='homeMainPage'>
      <section className='heroSection'>
        <div className='heroVideo'>
          <video
            controls
            autoPlay  
            muted
            ref={videoRef}
          
            src={heartStroke}
          />
        </div>
        <div className='headline'>
            <h2 className='headlineh2' data-aos="zoom-in-up" data-aos-duration="500" >
            Understanding Heart Strokes: Learn, Prevent, and Thrive
           </h2>
           <div className="learnMore">
                <button className="learnMoreButton">
                  learn More
                </button>
               </div>
        </div>

      </section>
    </div>
  );
}

export default Home;


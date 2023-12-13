import React from 'react'
import { useEffect } from 'react';
// import Majorppt from './assests/Major-project-ppt.pptx';
import './Pptviewer.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Pptviewer() {
    const linkToPPTFile =
  "https://docs.google.com/presentation/d/1kFxMiflxZoe8H4L0x3VQWinqYKYmGEHu/edit?usp=sharing&ouid=111187959648101235653&rtpof=true&sd=true"
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='Main_Container' >
        <div className='heading'>
            <h3>Presentation</h3>
        </div>
        <div className='presentation' data-aos="flip-left"  data-aos-duration="1000" >
         <iframe
        src={linkToPPTFile}
        width="100%"
        height="600px"
        frameBorder="0"
        title="slides"
      ></iframe>
      </div>
    </div>
  )
}

export default Pptviewer



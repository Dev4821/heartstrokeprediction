import React from "react";
import { useEffect } from "react";
import "./Navbar.css";
import mainLogo from './assests/mainLogo.png'
// import sideImage from './assests/doctor-heart.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar(props) {
  useEffect(() => {
    AOS.init();
  }, []);
 
  return (
    <div className="mainContainer">

      <div className={`${props.flag ? "navbarfixedcontainer" : "navbarContainer"}`}>
        <div  className="mainLogo">
          <img
            src={mainLogo}
            className="logoImage"
            alt="heartpredictlogo"
          />
        </div>

        <div className="bx bx-menu" id="menu-icon"></div>

        <ul className="navmenu">
          <li>
            <div className={`${props.flag ? "navOptionFixed" : "navOption"}`}>
              <span className="navBarOpt">About</span>
            </div>
          </li>
          <li>
            <div className={`${props.flag ? "navOptionFixed" : "navOption"}`}>
              <span className="navBarOpt">Symptoms</span>
            </div>
          </li>
          <li>
            <div className={`${props.flag ? "navOptionFixed" : "navOption"}`}>
              <span className="navBarOpt">Prevention</span>
            </div>
          </li>
          <li>
            <div className={`${props.flag ? "navOptionFixed" : "navOption"}`}>
              <span className="navBarOpt">Treatment</span>
            </div>
          </li>
          <li>
            <div className={`${props.flag ? "navOptionFixed" : "navOption"}`}>
              <span className="navBarOpt">Contact Us</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="headerContainer">
        <div className="headerContainerPart1">
            <div className="mainHeading">
              <h1 className="mainHeadingh1" data-aos="flip-left"  data-aos-duration="1000" >
              Stroke Guardian Welcomes <br />
              You
              </h1>
            </div>
             <div className="subcontent">
               <h3 className="subcontenth3">
                Personalized Care
               </h3>
               <div className="bookNow">
                <button className="bookNowButton" data-aos="fade-up"  data-aos-duration="1000" data-aos-delay="1000">
                  Book Now
                </button>
               </div>
             </div>
          </div>
          <div className="sideGif">
            {/* <img src={sideImage} alt="heartGif" /> */}
          </div>
             
             
      </div>
    </div>
  );
}

export default Navbar;

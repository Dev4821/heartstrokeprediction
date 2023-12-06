

import Footer from './Views/Footer';
import Navbar from './Views/Navbar';
import Home from './Views/Home';
import { useEffect,useState } from 'react';

function App() {
  
  const [check ,setCheck]=useState(false);
  
  const handleScroll = () => {
   
   
    if(window.scrollY>60)
    {
      setCheck(true);
    }
    else{
      setCheck(false);
    }
  };
  
  
  useEffect(() => {
  
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <Navbar flag={check}/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Banner.css';
import skill1 from '../Images/skill1.png'
import { useNavigate } from 'react-router-dom';
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
   
  useEffect(() => {
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150); 

    return () => clearInterval(intervalId);
  }, [text]);
 
  return (
    <motion.h2
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      className="title"
      style={{ color: "white" }}
    >
      {displayText}
    </motion.h2>
  );
};

const Banner= () => {
  const navigate=useNavigate();
const redirect=()=>{
    navigate("/signup")
}
  return (
    <div>
      <div>
        <div className="static-slider9 position-relative" style={{ backgroundColor: "black" }}>
          <div className="row">
            <div className="container">
              <div className="col-md-5 info-detail align-self-center">
              <motion.h2
                  animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                  transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className="title"
                  style={{ color: "white" }}>
                  Empowering Lifelong Learning
                </motion.h2>
                <h5 className="subtitle font-weight-normal">To accomplish great things, we must not only act, but also dream; not only plan, but also believe.</h5>
                <TypewriterEffect text="Where Dreams Find Direction...." />
                <form className="form-inline">
                  <div className="form-group"></div>
                  <Link to='/login'><button type="submit" className="btn btn-md btn-success-gradiant text-white border-0 mb-2" onClick={redirect}>Get Started</button></Link>
                </form>
              </div>
            </div>
            <div
              className="col-md-4 bg-img" style={{backgroundImage:`url(${skill1})`,height:"109vh",width:"130vh"}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
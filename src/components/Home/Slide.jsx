import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Skills from "./Skills";
import { skillsdata, responsive } from "./Data";
import './styles/Slide.css'
const Slide = () => {
    const product = skillsdata.map((item) => (
        <Skills
          key={item.id} 
          name={item.name}
          url={item.imageurl}
          description={item.description}
        />
      ));
    
      return (
        <div className="A" >
          <Carousel showDots={false} responsive={responsive}>
                               {product}
                           
          </Carousel>
        </div>
      );
}

export default Slide
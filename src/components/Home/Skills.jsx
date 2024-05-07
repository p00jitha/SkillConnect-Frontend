import React from "react";
import {motion} from 'framer-motion'
export default function Skills(props) {
  return (
    <motion.div className="card" whileHover={{ scale: 1.2 }}>
      <img className="product--image" src={props.url} alt="product" />
      <h2>{props.name}</h2>
      <p style={{color:"black"}}>{props.description}</p>
    </motion.div>
  );
}
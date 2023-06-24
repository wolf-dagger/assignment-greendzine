import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <div className="Employee_id">{props.keyy}</div>
        <img className="Employee_img" src={props.avatar} alt="name" />

        <div className="Employee_firstName">
          {props.firstName} {props.lastName}
        </div>
      </motion.div>
    </>
  );
}

export default Card;

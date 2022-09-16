import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import './projectcard.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  const { theme } = useContext(PortfolioContext);
  return(
    <motion.div whileHover={{ scale: 1.03 }} className={`${theme}CardMotionDiv`}>
    <Link to={props.link} className="projectCardLink">
      <div className='projectCardDiv'>
        <div className='projectCardImgDiv'>
          <img src={props.img} alt={props.name} 
          className="projectCardImg" />
        </div>
        <h2 className={`projectCardTitle ${theme}projectCardTitle`}>{props.title}</h2>
        <p className={`projectCardViewProject ${theme}projectCardViewProject`}>View Project</p>
      </div>
    </Link>
    </motion.div>
  )
}
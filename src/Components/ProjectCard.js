import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import './projectcard.css';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  const { theme } = useContext(PortfolioContext);
  return(
    <Link to={props.link} className="projectCardLink">
      <div className='projectCardDiv'>
        <div className='projectCardImgDiv'>
        <motion.div whileHover={{ scale: 1.2 }}>
          <img src={props.img} alt={props.name} 
          className="projectCardImg" />
          </motion.div>
        </div>
        <h2 className={`projectCardTitle ${theme}projectCardTitle`}>{props.title}</h2>
        <p className={`projectCardViewProject ${theme}projectCardViewProject`}>View Project</p>
      </div>
    </Link>
  )
}
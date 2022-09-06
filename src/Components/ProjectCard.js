import React from 'react';
import './projectcard.css';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  return(
    <Link to={props.link}>
      <div className='projectCardDiv'>
        <img src={props.img} alt={props.name} className="projectCardImg" />
        <h2>{props.title}</h2>
        <p>View Project</p>
      </div>
    </Link>
  )
}
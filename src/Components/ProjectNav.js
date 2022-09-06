import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import './projectnav.css';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function ProjectNav(props) {
  const { theme } = useContext(PortfolioContext);
  return (
    <div className='projectNavDiv'>
      <Link to="/"><FaArrowLeft size={40} className={`${theme}ProjectNavBackArrow`}  /></Link>
      <h1>{props.title}</h1>
    </div>
  )
}
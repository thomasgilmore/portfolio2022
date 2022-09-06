import './projects.css';
import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = useContext(PortfolioContext);
  return (
    <div className='projectsDiv' id="projects">
      <h2>Projects</h2>
      <div className='projectsListDiv'>
        {projects.map((project) => {
          return <ProjectCard key={project.title} img={project.img} title={project.title} url={project.url} link={project.link} />
        })}
      </div>
    </div>
  )
}
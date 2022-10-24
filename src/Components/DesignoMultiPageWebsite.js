import './designomultipagewebsite.css';
import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function DesignoMultiPageWebsite() {
  const { theme } = useContext(PortfolioContext);
  return(
    <div className='designoMultiPageWebsiteDiv'>
      <Container>
        <ProjectNav title='Designo Multi-Page Website' />
        <div className="siteLinksDiv">
          <a href="https://main.dcut5jiges03w.amplifyapp.com" target="_blank" className={`${theme}ViewSiteLink`} rel="noreferrer">View Site</a>
          <a href="https://github.com/thomasgilmore/designo-multi-page-website" target="_blank" className={`${theme}ViewCodeLink`} rel="noreferrer">View Code</a>
        </div>
        <p className="projectText">This project I followed a Figma design that was given to me to create a multi-page react website. To create the different pages, I used React Router to display the different components for each page.</p>
        <h3>What I Learned?</h3>
        <p className="projectText">Practicing making a multi-page website while creating the site with React.</p>
        <p className='projectText'>I've been using the useContext hook in a couple of projects and I also wanted to include it in this project to help maintain react state and functions that are shared between components.</p>
      </Container>
    </div>
  )
}
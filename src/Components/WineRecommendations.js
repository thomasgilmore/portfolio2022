import './winerecommendations.css';
import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function WineRecommendations() {
  const { theme } = useContext(PortfolioContext);
  return (
    <div className='wineRecommendationsDiv'>
      <Container>
        <ProjectNav title="Wine Recommendations" />
        <div className="siteLinksDiv">
          <a href="https://gilmore-wine-recommendations-v2.netlify.app/" target="_blank" className={`${theme}ViewSiteLink`} rel="noreferrer">View Site</a>
          <a href="https://github.com/thomasgilmore95/wine-recommendations-app-v2" target="_blank" className={`${theme}ViewCodeLink`} rel="noreferrer">View Code</a>
        </div>
        <p className="projectText">I created a Wine Recommendations Application where you can either find a dish that goes well with a given wine (ex. Malbec, Pinot Grigio, Rose Wine, ... etc.). Also you can find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("Italian").</p>
        <p className="projectText">For the Wine Recommendations I'm using two API endpoints from Spoonacular API. I'm using the get dish pairing for wine were you find a dish that goes well with a given wine and I'm also using get wine pairing that finds a wine that goes well with food.</p>
        <p className="projectText">I used React to create the frontend for this project. I used two AJAX calls for the two different API endpoints to return the data to the user and using Netlify to host the app.</p>
        <h3>What I Learned?</h3>
        <p className='projectText'>Deploying a site that fetches from two different APIs to return data and images to the user based on what they typed in.</p>
      </Container>
    </div>
  )
}
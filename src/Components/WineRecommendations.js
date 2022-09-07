import React from 'react';
import './winerecommendations.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function WineRecommendations() {
  return (
    <div className='wineRecommendationsDiv'>
      <Container>
        <ProjectNav title="Wine Recommendations" />
        <p>I created a Wine Recommendations Application where you can either find a dish that goes well with a given wine (ex. Malbec, Pinot Grigio, Rose Wine, ... etc.). Also you can find a wine that goes well with a food. Food can be a dish name ("steak"), an ingredient name ("salmon"), or a cuisine ("Italian").</p>
        <p>For the Wine Recommendations I'm using two API endpoints from Spoonacular API. I'm using the get dish pairing for wine were you find a dish that goes well with a given wine and I'm also using get wine pairing that finds a wine that goes well with food.</p>
        <p>I used React to create the frontend for this project. I used two AJAX calls for the two different API endpoints to return the data to the user and using Netlify to host the app.</p>
      </Container>
    </div>
  )
}
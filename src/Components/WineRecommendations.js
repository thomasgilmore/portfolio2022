import React from 'react';
import './winerecommendations.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function WineRecommendations() {
  return (
    <div className='wineRecommendationsDiv'>
      <Container>
      <ProjectNav title="Wine Recommendations" />
      </Container>
    </div>
  )
}
import React from 'react';
import './moodycreaturesociety.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function MoodyCreatureSociety() {
  return(
    <div className='moodyCreatureSocietyDiv'>
      <Container>
        <ProjectNav title="Moody Creature Society" />
      </Container>
    </div>
  )
}
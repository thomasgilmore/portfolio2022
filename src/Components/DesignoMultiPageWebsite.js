import React from 'react';
import './designomultipagewebsite.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function DesignoMultiPageWebsite() {
  return(
    <div className='designoMultiPageWebsiteDiv'>
      <Container>
        <ProjectNav title='Designo Multi-Page Website' />
        <p className="projectText">This project I followed a figma design that was given to me to create a multi-page react website. To create the different pages I used React Router to display the different components for each page.</p>
      </Container>
    </div>
  )
}
import React from 'react';
import './designomultipagewebsite.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function DesignoMultiPageWebsite() {
  return(
    <div className='designoMultiPageWebsiteDiv'>
      <Container>
        <ProjectNav title='Designo Multi-Page Website' />
      </Container>
    </div>
  )
}
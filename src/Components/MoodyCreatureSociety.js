import React from 'react';
import './moodycreaturesociety.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function MoodyCreatureSociety() {
  return(
    <div className='moodyCreatureSocietyDiv'>
      <Container>
        <ProjectNav title="Moody Creature Society" />
        <p>This project I worked with a team lead, backend developer, and the client. I worked on the Frontend landing page using React for a NFT. It displays price info, date release, some of the pictures of the NFTs for sale, etc.</p> 

        <p>I was given all of the elements for the website (ex. images and text) and they gave me a sketch to follow that was written on a piece of paper. It was definitely one of the more interesting ways to get a design and possibly made it more difficult. However, I'm always up for a good challenge to work on.</p>
      </Container>
    </div>
  )
}
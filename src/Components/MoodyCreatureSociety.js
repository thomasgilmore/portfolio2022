import './moodycreaturesociety.css';
import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function MoodyCreatureSociety() {
  const { theme } = useContext(PortfolioContext);
  return(
    <div className='moodyCreatureSocietyDiv'>
      <Container>
        <ProjectNav title="Moody Creature Society" />
        <div className="siteLinksDiv">
          <a href="https://main.d3fir16ql4oem.amplifyapp.com" target="_blank" className={`${theme}ViewSiteLink`} rel="noreferrer">View Site</a>
          <a href="https://github.com/thomasgilmore95/mcs" target="_blank" className={`${theme}ViewCodeLink`} rel="noreferrer">View Code</a>
        </div>
        <p className="projectText">This project I worked with a team lead, back end developer, and the client. I worked on the front end side of a landing page using React for a NFT. It displays price info, date release, some of the pictures of the NFTs for sale, etc.</p> 

        <p className="projectText">I was given all of the elements for the website (ex. images and text) and they gave me a sketch to follow that was written on a piece of paper. It was definitely one of the more interesting ways to get a design and possibly made it more difficult. However, I'm always up for a good challenge to work on.</p>

        <h3>What I Learned?</h3>
        <p className="projectText">Working with new people is always a good challenge that I welcome and I like to learn something if I can. Since there are so many ways on how to do something, I really enjoy seeing different ways accomplish a task.</p>
      </Container>
    </div>
  )
}
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { PortfolioContext } from '../Context/Context';
import './home.css';

export default function Home() {
  const { theme } = useContext(PortfolioContext);
  return (
    <Container>
      <div className='portfolioHero'>
        <h1>Hello, I'm Thomas Gilmore</h1>
        <h1>I'm a Front End Developer</h1>
        <div className='portfolioHeroSocialIcons'>
        
        </div>
      </div>
    </Container>
  )
}
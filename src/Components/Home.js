import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { PortfolioContext } from '../Context/Context';
import './home.css';
import GitHubMark from '../Assets/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import GitHubMarkLight from '../Assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';
import LinkedinLogo from '../Assets/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png';
import About from './About';

export default function Home() {
  const { theme } = useContext(PortfolioContext);
  return (
    <Container>
      <div className='portfolioHero'>
        <h1>Hello, I'm Thomas Gilmore</h1>
        <h1>I'm a Front End Developer</h1>
        <div className='portfolioHeroSocialIcons'>
          <a href="https://github.com/thomasgilmore95" target="__blank">{theme === 'light' ? <img src={GitHubMark} className="gitHubLogo" alt="GitHub Logo Link to My GitHub Account" /> : <img src={GitHubMarkLight}   className="gitHubLogo" alt="GitHub Logo Link to My HitHub Account" />}</a>
          <button>Resume</button>
          <a href="https://www.linkedin.com/in/thomasgilmore95/" target="__blank"><img src={LinkedinLogo} className="linkedinLogo" alt="Linkedin Logo to Linkedin Account" /></a>
        </div>
      </div>
      <About />
    </Container>
  )
}
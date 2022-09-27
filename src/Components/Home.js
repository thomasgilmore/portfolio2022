import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { PortfolioContext } from '../Context/Context';
import './home.css';
import NavBar from './NavBar';
import Typewriter from 'typewriter-effect';
import GitHubMark from '../Assets/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import GitHubMarkLight from '../Assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';
import LinkedinLogo from '../Assets/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png';
import HeroImage from './HeroImage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Certificates from './Certificates';
import Footer from './Footer';

export default function Home() {
  const { theme } = useContext(PortfolioContext);
  return (
    <Container>
      <NavBar />
      <div className='portfolioHero'>
        <div>
        <h1 className='hiThere'>Hi there, I'm Thomas.</h1>
        <Typewriter options={{
          strings: ['Front End Developer.', 'Self-Taught Developer.'],
          autoStart: true,
          loop: true,
          cursorClassName: 'heroCursor',
        }} />
        <div className='portfolioHeroSocialIcons'>
          <a href="https://github.com/thomasgilmore95" target="__blank">{theme === 'light' ? <img src={GitHubMark} className="gitHubLogo" width="50px" height="50px" alt="GitHub Logo Link to My GitHub Account" /> : <img src={GitHubMarkLight} className="gitHubLogo" width="50px" height="50px" alt="GitHub Logo Link to My HitHub Account" />}</a>
          <a href="./Resume.pdf" target="__blank"><Button className={`${theme}ResumeButton`}>Resume</Button></a>
          <a href="https://www.linkedin.com/in/thomasgilmore95/" target="__blank">
          <picture>
            <img src={LinkedinLogo} width="50px" height="50px" className="linkedinLogo" alt="Linkedin Logo to Linkedin Account" />
          </picture>
          </a>
        </div>
        </div>
        <HeroImage />
      </div>
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
}
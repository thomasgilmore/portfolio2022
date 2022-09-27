import './contactme.css';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { PortfolioContext } from '../Context/Context';
import GitHubMark from '../Assets/GitHub-Mark/PNG/GitHub-Mark-120px-plus.png';
import GitHubMarkLight from '../Assets/GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png';
import LinkedinLogo from '../Assets/iconfinder_1_Linkedin_unofficial_colored_svg_5296501.png';

export default function ContactMe() {
  const { theme, handleDownloadResume } = useContext(PortfolioContext);
  return (
    <div className='contactMeDiv'>
      <h1>Contact Me</h1>
      <div className='portfolioHeroSocialIcons'>
        <a href="https://github.com/thomasgilmore95" target="__blank">{theme === 'light' ? <img src={GitHubMark} className="gitHubLogo" width="50px" height="50px" alt="GitHub Logo Link to My GitHub Account" /> : <img src={GitHubMarkLight} className="gitHubLogo" width="50px" height="50px" alt="GitHub Logo Link to My HitHub Account" />}</a>
        <Button className={`${theme}ResumeButton`} onClick={handleDownloadResume}>Resume</Button>
        <a href="https://www.linkedin.com/in/thomasgilmore95/" target="__blank">
          <picture>
            <img src={LinkedinLogo} width="50px" height="50px" className="linkedinLogo" alt="Linkedin Logo to Linkedin Account" />
          </picture>
        </a>
      </div>
    </div>
  )
}
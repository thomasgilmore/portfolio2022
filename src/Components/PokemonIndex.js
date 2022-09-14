import './pokemonidex.css';
import React, { useContext } from 'react';
import { PortfolioContext } from '../Context/Context';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function PokemonIndex() {
  const { theme } = useContext(PortfolioContext);
  return(
    <div className='pokemonIndexDiv'>
      <Container>
        <ProjectNav title="Pokémon Index" />
        <div className="siteLinksDiv">
          <a href="https://gilmore-pokemon-index.netlify.app/" target="_blank" className={`${theme}ViewSiteLink`}>View Site</a>
          <a href="https://github.com/thomasgilmore95/Pokemon-Index" target="_blank" className={`${theme}ViewCodeLink`}>View Code</a>
        </div>
        <p className="projectText">Implements user login feature with Google OAuth and utilizes context hook to handle UI states</p>
        <p className="projectText">Integrates REST protocol that works with Pokemoncg.io API endpoints</p>

        <p className="projectText">I like to add new coding challenges for myself while doing new projects. So I can learn something new while creating a new project. I implemented user login feature with Google Oauth and the UI updates to display the users picture and name in the nav when they are signed in.</p>

        <p className="projectText">Integrate REST protocol that works with Pokemoncg.io API endpoints to fetch the Pokémon cards to display them and you can also search for a particular Pokémon card and the UI will update to only display that Pokémon. I utilized context hook to handle UI states for the application and also created UI components with functional components and hooks. 
        </p>
      </Container>
    </div>
  )
}
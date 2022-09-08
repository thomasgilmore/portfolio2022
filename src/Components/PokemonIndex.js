import React from 'react';
import './pokemonidex.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function PokemonIndex() {
  return(
    <div className='pokemonIndexDiv'>
      <Container>
        <ProjectNav title="Pokémon Index" />
        <p>Implements user login feature with Google OAuth and utilizes context hook to handle UI states</p>
        <p>Integrates REST protocol that works with Pokemoncg.io API endpoints</p>

        <p>I like to add new coding challenges for myself while doing new projects. So I can learn something new while creating a new project. I implemented user login feature with Google Oauth and the UI updates to display the users picture and name in the nav when they are signed in.</p>

        <p>Integrate REST protocol that works with Pokemoncg.io API endpoints to fetch the Pokémon cards to display them and you can also search for a particular Pokémon card and the UI will update to only display that Pokémon. I utilized context hook to handle UI states for the application and also created UI components with functional components and hooks. 
        </p>
      </Container>
    </div>
  )
}
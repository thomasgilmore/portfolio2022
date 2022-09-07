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
      </Container>
    </div>
  )
}
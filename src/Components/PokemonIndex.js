import React from 'react';
import './pokemonidex.css';
import Container from 'react-bootstrap/Container';
import ProjectNav from './ProjectNav';

export default function PokemonIndex() {
  return(
    <div>
      <Container>
        <ProjectNav title="Pokémon Index" />
      </Container>
    </div>
  )
}
import { useState, useEffect } from 'react';
import { PokemonCard } from '../../components/PokemonCards/PokemonCard';
import { Link } from 'react-router-dom';
import './PokemonList.css';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);

        const data = await response.json();

        if (!response.ok) {
          throw new Error('No results');
        }

        setPokemons(data.results);
      } catch (err) {
        setPokemons([]);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="list">
      <h2>Lista de Pokémon</h2>

      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            pokemon={pokemon}
            id={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

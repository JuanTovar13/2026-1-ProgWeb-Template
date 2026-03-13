import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error('No results');
        }
        setPokemon(data);
      } catch (error) {
        setPokemon([]);
      }
    };
    fetchPokemon();
  }, [id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>Nombre: {pokemon.name}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
};

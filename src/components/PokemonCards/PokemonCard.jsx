import './PokemonCard.css'
import { Link } from 'react-router-dom';

export const PokemonCard = ({ pokemon, id}) => {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return (
    <div className="pokemon-card">
      <img src={image} alt={pokemon.name} />

      <h3>{pokemon.name}</h3>

      <Link to={`/pokemon/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  )
}

import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { PokemonList } from './pages/PokemonList/PokemonList';
import { PokemonDetails } from './pages/PokemonDetails/PokemonDetails';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/pokemon">Pokémon</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export default App;

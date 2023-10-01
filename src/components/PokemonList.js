import { useState, useEffect } from 'react';
import '../styles/PokemonList.css';
import Header from './Header';
import Pokemon from './Pokemon';
import Search from './Search';

const PokemonList = props => {
    const [toggleSearch, setToggleSearch] = useState(false);
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
      try {
        const response = await fetch('/pokedex.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setPokemons(data);
        setFilteredPokemons(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (searchTerm, selectedType) => {
        const filtered = pokemons.filter((pokemon) => {
          const nameMatch = pokemon.name.english.toLowerCase().includes(searchTerm.toLowerCase());
          const typeMatch = selectedType.length === 0 || selectedType.some(type => pokemon.type.includes(type));
          return nameMatch && typeMatch;
        });
    
        setFilteredPokemons(filtered);
    };

    const handleToggleSearch = () => {
        setToggleSearch(!toggleSearch);
    };

    if (loading) {
        return (
            <>
            <Header handleToggleSearch={handleToggleSearch} toggleSearch={toggleSearch} />
            <div className="spinner">
                <img src="spinner.gif" alt="Loading Spinner" />
            </div>
            </>
        );
    }

    return (
        <>
            <Header handleToggleSearch={handleToggleSearch} toggleSearch={toggleSearch} />
            {toggleSearch && <Search onSearch={handleSearch} />}
            <div className="pokedex-grid">
            {filteredPokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} {...pokemon} />
            ))}
            </div>
        </>
    );
};

export default PokemonList;
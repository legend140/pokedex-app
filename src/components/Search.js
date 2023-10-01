import { useState } from 'react';
import '../styles/Search.css';

const Search = props => {
  const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const types = ["Grass", "Fire", "Water", "Electric", "Ice", "Psychic", "Dark", "Fighting", "Ground", "Flying", "Bug", "Rock", "Ghost", "Steel", "Dragon", "Fairy", "Normal"];


  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(searchTerm, selectedTypes);
  };

  const handleTypeChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedTypes(selectedOptions);
    onSearch(searchTerm, selectedOptions);
  };

  return (
    <div className="search-container">
      <input className="input-field"
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select
        className="input-field"
        multiple
        value={selectedTypes}
        onChange={handleTypeChange}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Search;

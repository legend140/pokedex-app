import '../styles/PokemonDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';

const PokemonDetail = props => {
  const location = useLocation();
  const { pokemonData } = location.state || {};
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!pokemonData) {
    return (
      <>
        <Header showBack={true} handleGoBack={handleGoBack} />
        <div className="pokemon-detail">
          <div className="spinner">
              <img src="../spinner.gif" alt="Loading Spinner" />
            </div>
        </div>
      </>
    );
  }

  const { id, name, type, base } = pokemonData;
  const imageUrl = `/images/${String(id).padStart(3, '0')}.png`;

  return (
    <>
      <Header showBack={true} handleGoBack={handleGoBack} />
      <div className="pokemon-detail">
        <img src={imageUrl} alt={name.english} />
        <h2>{name.english}</h2>
        <p>ID: {id}</p>
        <p>Type: {type.join(', ')}</p>
        <h3>Base Stats</h3>
        <ul>
          <li>HP: {base.HP}</li>
          <li>Attack: {base.Attack}</li>
          <li>Defense: {base.Defense}</li>
          <li>Special Attack: {base["Sp. Attack"]}</li>
          <li>Special Defense: {base["Sp. Defense"]}</li>
          <li>Speed: {base.Speed}</li>
        </ul>
      </div>
    </>
  );
}

export default PokemonDetail;
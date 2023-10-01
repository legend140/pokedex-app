import '../styles/Pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = props => {
  const imageUrl = `/thumbnails/${String(props.id).padStart(3, '0')}.png`;

  return (
    <Link to={`pokemon/${props.id}`} state={{ pokemonData: props }}>
        <div className={`pokemon-card ${props.type.join(' ')}`}>
        <img src={imageUrl} alt={props.name.english} />
      </div>
    </Link>
  );
};

export default Pokemon;
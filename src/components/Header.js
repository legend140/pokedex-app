import '../styles/Header.css';

const Header = props => {
  return (
    <header className="header-container">
      <h1 className="header-title">Pokédex</h1>
      <button className="caret-button" onClick={props.handleToggleSearch}>
        {props.toggleSearch ? '▲' : '▼'}
      </button>
    </header>
  );
};

export default Header;
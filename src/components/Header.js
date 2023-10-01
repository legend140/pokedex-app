import '../styles/Header.css';

const Header = props => {
  return (
    <header className="header-container">
      {props.showBack && (
        <button className="back-button" onClick={props.handleGoBack}>◄</button>
      )}
      <h1 className="header-title">Pokédex</h1>
      {props.showSearch && (
        <button className="caret-button" onClick={props.handleToggleSearch}>
          {props.toggleSearch ? '▲' : '▼'}
        </button>
      )}
    </header>
  );
};

export default Header;
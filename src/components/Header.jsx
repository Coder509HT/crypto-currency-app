import "../styles/Header.css";

const Header = ({ title }) => {
  return (
    <header className="header">
      <p className="headerTitle">{title}</p>
    </header>
  );
};

export default Header;

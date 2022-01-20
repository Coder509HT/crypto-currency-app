import "../styles/Footer.css";

const Footer = ({ year, author }) => {
  return (
    <footer className="footer">
      <p className="copy-right">
        Copyright &copy; {year}-{year + 1} {author} All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;

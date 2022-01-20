import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CoinsList from "./components/CoinsList";
import CoinInputSearch from "./components/CoinInputSearch";

const App = () => {
  const title = "Cryptocurrencies App";
  const year = new Date().getFullYear();
  const author = "CodeWithMarc";

  return (
    <div className="App">
      <Header title={title} />
      <CoinInputSearch />
      <CoinsList />
      <Footer year={year} author={author} />
    </div>
  );
};

export default App;

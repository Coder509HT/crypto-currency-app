import * as axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const title = "Coin Currency App";

  const [coinList, setCoinList] = useState([]);

  const [coin, setCoin] = useState("");

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_LINK).then((response) => {
      setCoinList(response.data.coins);
    });
  }, []);

  const filteredCoin = coinList.filter((newCoin) =>
    newCoin.name.toLowerCase().includes(coin.toLowerCase())
  );

  console.log(coinList);

  return (
    <div className="App">
      <h1 className="title">{title}</h1>

      <input
        type="text"
        placeholder="Enter a coin"
        onChange={(e) => setCoin(e.target.value)}
      />

      <div className="coins">
        {filteredCoin.map((coin) => (
          <div key={coin.id} className="coin">
            <img src={coin.icon} alt="coin-name" className="coin-img" />
            <div className="coin-aside">
              <h4 className="coin-title desc">
                Name: <span className="resp">{coin.name}</span>
              </h4>
              <p className="desc">
                Symbol: <span className="resp">{coin.symbol}</span>
              </p>
              <p className="desc">
                Price: <span className="resp">{coin.price}</span>
              </p>
              <p className="desc">
                Website:{" "}
                <span className="resp">
                  <a href={coin.websiteUrl} target="_blank" rel="noreferrer">
                    {coin.name}
                  </a>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

import "../styles/CoinsList.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lodingCoins } from "../redux/coinReducer";

import Coin from "./Coin";

const CoinsList = () => {
  const coins = useSelector((state) => state.coins.coins);
  const coinToSearch = useSelector((state) => state.coins.coinToSearch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lodingCoins());
  }, [dispatch]);

  const filteredCoin = coins.filter((newCoin) =>
    newCoin.name.toLowerCase().includes(coinToSearch.toLowerCase())
  );

  return (
    <div className="coins-list">
      {filteredCoin.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
};

export default CoinsList;

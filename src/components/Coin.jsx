import "../styles/Coin.css";

const Coin = ({ coin }) => {
  return (
    <div className="coin">
      <div className="coin-header">
        <h4 className="coin-title">{coin.name}</h4>
      </div>
      <img src={coin.icon} alt="coin-name" className="coin-img" />
      <div className="coin-aside">
        <p className="desc">
          Symbol: <span className="resp">{coin.symbol}</span>
        </p>
        <p className="desc">
          Price: <span className="resp">{coin.price}</span>
        </p>
        <p className="desc">
          Rank: <span className="resp">{coin.rank}</span>
        </p>
        {coin.websiteUrl !== undefined && (
          <p className="desc">
            Website:{" "}
            <span className="resp">
              <a href={coin.websiteUrl} target="_blank" rel="noreferrer">
                {coin.name}
              </a>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Coin;

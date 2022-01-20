import "../styles/Coin.css";

const Coin = ({ coin }) => {
  return (
    <div className="coin">
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

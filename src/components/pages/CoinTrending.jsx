import "./CoinTrending.css";

/* constate CoinTrending com os dados de cada moeda */
const CoinTrending = ({ coin }) => {
  return (
    /* Renderiza os dados de cada moeda */
    <div className="cointrending-container">
      <div className="trending-container">
        <span>{coin.score + 1}.</span>
        <img src={coin.small} alt={coin.name} />
        <p className="title">{coin.name}</p>
        <small className="subtitle">({coin.symbol})</small>
      </div>
    </div>
  );
};

export default CoinTrending;

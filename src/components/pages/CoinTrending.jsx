import "./CoinTrending.css";
const CoinTrending = ({ coin }) => {
  return (
    <div className="cointrending-container">
      <div className="trending-container">
        <span>{coin.score + 1}.</span>
        <img src={coin.small} alt={coin.name} />
        <p>{coin.name}</p>
        <small>({coin.symbol})</small>
      </div>
    </div>
  );
};

export default CoinTrending;
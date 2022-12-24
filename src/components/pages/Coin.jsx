import "./Coin.css";

import { Link } from "react-router-dom";
/* constante Coin com os dados de cada moeda */
const Coin = ({
  id, // id da moeda
  name, // nome da moeda
  price, // preço da moeda
  symbol, // símbolo da moeda
  marketcap, // capitalização de mercado
  volume, // volume de negociação
  image, // imagem da moeda
  priceChange, // variação de preço
}) => {
  return (
    /* Renderiza os dados de cada moeda */
    <div className="coin-container">
      <div className="coin-row">
        <Link to="/chart" state={{ id: id.toLowerCase() }} target="_self">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </Link>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? ( // Se a variação de preço for menor que 0, renderiza o texto em vermelho
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            // Se a variação de preço for maior que 0, renderiza o texto em verde
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;

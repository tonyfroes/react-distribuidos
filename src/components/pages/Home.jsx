/* todos os imports */
import "./Home.css";
import Coin from "./Coin.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import useAxios from "./hooks/useAxios";
import CoinTrending from "./CoinTrending";

/* constante Home com os dados de cada moeda */
function Home() {
  const [coins, setCoins] = useState([]); // Dados da API
  const [search, setSearch] = useState(""); // Dados da API
  const { response, loading } = useAxios("search/trending"); // Dados da API

  useEffect(() => {
    // Pega os dados da API
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    // handleChange para o input
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    // Filtra os dados da API
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    // Se não tiver dados, renderiza o texto "Carregando..."
    return (
      <div className="wrapper-container mt-8">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    // Renderiza os dados de cada moeda
    <div className="coin-app">
      <div className="coin-search">
        <div className="trending-coin">
          <h1 className="trending-text primary-text">Trending</h1>
          <div className="coin-tranding-bg">
            {response &&
              response.coins.map((coin) => (
                <CoinTrending key={coin.item.coin_id} coin={coin.item} />
              ))}
          </div>
        </div>
      </div>
      <form>
        <input
          className="coin-input"
          type="text"
          onChange={handleChange}
          placeholder="Digite o nome da moeda"
        />
      </form>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default Home;

import useAxios from "../hooks/useAxios";
import CoinTrending from "./CoinTrending";

const Trending = () => {
  const { response, loading } = useAxios("search/trending");

  if (loading) {
    return (
      <div className="wrapper-container mt-8">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2">Trending</h1>
      {response &&
        response.coins.map((coin) => (
          <CoinTrending key={coin.item.coin_id} coin={coin.item} />
        ))}
    </div>
  );
};

export default Trending;

import "./Nft.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Token from "./Token.jsx";

function Nft() {
  const [tokens, setTokens] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/nfts/list?order=h24_volume_native_asc"
      )
      .then((res) => {
        setTokens(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="token-app">
      <div className="token-search">
        <h1 className="token-text">Digite nome do NFT</h1>
        <form>
          <input
            className="token-input"
            type="text"
            onChange={handleChange}
            placeholder="Pesquisar"
          />
        </form>
      </div>
      {filteredTokens.map((token) => {
        return (
          <Token
            key={token.id}
            id={token.id}
            name={token.name}
            asset_platform_id={token.asset_platform_id}
            symbol={token.symbol}
          />
        );
      })}
    </div>
  );
}

export default Nft;

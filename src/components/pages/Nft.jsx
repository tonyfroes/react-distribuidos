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
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(tokens);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="token-app">
      <form className="searching-pt">
        <input
          className="coin-input"
          type="text"
          onChange={handleChange}
          placeholder="Digite o nome da NFT"
        />
      </form>
      {filteredTokens.map((token) => {
        return <Token key={token.id} name={token.name} />;
      })}
    </div>
  );
}

export default Nft;

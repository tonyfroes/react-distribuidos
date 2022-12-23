import "./Token.css";

const Token = ({ id, name, asset_platform_id, symbol }) => {
  return (
    <div className="token-container">
      <div className="token-row">
        <div className="token">
          <h1>{id}</h1>
          <h1>{name}</h1>
          <h1>{asset_platform_id}</h1>
          <h1>{symbol}</h1>
        </div>
      </div>
    </div>
  );
};

export default Token;

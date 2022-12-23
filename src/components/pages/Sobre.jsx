import "./Sobre.css";
function Sobre() {
  return (
    <div className="sobre-container">
      <div className="segundo-container">
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/42457749?s=400&u=8a5d2c18368939558d24a541e91cab9b32cc45f7&v=4"
          alt=""
        />
        <h1 className="color-font">Trabalho</h1>
        <p className="font">
          O trabalho consiste em criar uma aplicação web que utilize a API do
          CoinGecko para listar as criptomoedas e seus respectivos NFTs. A
          aplicação foi desenvolvida em React e utiliza o Axios para fazer as
          requisições à API. O projeto foi desenvolvido por
          <a href="https://github.com/tonyfroes"> Tony Froes </a>
          para a disciplina de Sistemas Distribuídos.
        </p>
      </div>
    </div>
  );
}

export default Sobre;

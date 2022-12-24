/* Todos os imports */
import "./Chart.css";
import useAxios from "./hooks/useAxios.jsx";
import { useLocation } from "react-router-dom";
import HistoryChart from "./History.jsx";

function Chart() {
  // Função que renderiza o componente
  const location = useLocation(); // Pega o estado da rota
  const { id } = location.state; // Pega o id do estado da rota
  const { name } = location.state; // Pega o nome do estado da rota
  const { response } = useAxios(
    // Pega a resposta da API
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );

  if (!response)
    // Se não tiver resposta, renderiza o loading
    return (
      <div className="chart-container">
        <h1>Carregando...</h1>
      </div>
    );

  return (
    // Se tiver resposta, renderiza o componente
    <div className="coin-div-principal">
      <HistoryChart />
      <div className="principal-container">
        {" "}
        <img
          src={response.image.small}
          alt={response.name}
          href
          className="text-blue-600 underline"
        />
        <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}</h1>
      </div>
      <p
        className="texto-cripto"
        dangerouslySetInnerHTML={{ __html: response.description.en }}
      ></p>{" "}
      <a
        href
        dangerouslySetInnerHTML={{ __html: response.links.homepage[0] }}
      ></a>
    </div>
  );
}

export default Chart;

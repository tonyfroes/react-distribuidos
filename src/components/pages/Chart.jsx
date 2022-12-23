import "./Chart.css";
import useAxios from "./hooks/useAxios.jsx";
import { useLocation } from "react-router-dom";
import HistoryChart from "./History.jsx";

function Chart() {
  const location = useLocation();
  const { id } = location.state;
  const { name } = location.state;
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );
  if (!response)
    return (
      <div className="chart-container">
        <h1>Carregando...</h1>
      </div>
    );

  return (
    <div className="coin-div-principal">
      <HistoryChart />
      <div className="principal-container">
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
      ></p>
      <a
        href
        dangerouslySetInnerHTML={{ __html: response.links.homepage[0] }}
      ></a>
    </div>
  );
}

export default Chart;

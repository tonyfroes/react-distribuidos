import "./Chart.css";
import useAxios from "./hooks/useAxios.jsx";
import { useLocation } from "react-router-dom";
import HistoryChart from "./History.jsx";

function Chart() {
  const location = useLocation();
  const { id } = location.state;
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );
  console.log("NOME DO ID: " + id);
  if (!response)
    return (
      <div className="chart-container">
        <h1>Carregando...</h1>
      </div>
    );

  return (
    <div className="my-6">
      <HistoryChart />
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}</h1>
      </div>
      <p
        className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline"
        dangerouslySetInnerHTML={{ __html: response.description.en }}
      ></p>
    </div>
  );
}

export default Chart;

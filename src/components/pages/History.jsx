/* todos os imports */
import useAxios from "./hooks/useAxios.jsx";
import "./History.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { useLocation } from "react-router-dom";

/* Registra os plugins do ChartJS */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

/* constante HistoryChart com os dados de cada moeda */
const HistoryChart = () => {
  const location = useLocation(); // Pega o id da moeda
  const { id } = location.state; // Pega o id da moeda
  const { response } = useAxios(
    // Pega os dados da API
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response) {
    // Se não tiver dados, renderiza o texto "Carregando..."
    return (
      <div className="wrapper-container mt-8">
        <h1>Carregando...</h1>
      </div>
    );
  }
  const coinChartData = response.prices.map((value) => ({
    // Pega os dados da API
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    // Configurações do ChartJS
    responsive: true, // Responsivo
  };
  const data = {
    // Dados do ChartJS
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true, // Preenche o gráfico
        label: id, // Nome da moeda
        data: coinChartData.map((val) => val.y), // Dados da moeda
        borderColor: "rgb(53, 162, 235)", // Cor da borda
        backgroundColor: "rgba(53, 162, 235, 0.5)", // Cor de fundo
      },
    ],
  };

  return (
    // Renderiza o gráfico
    <div className="history-container">
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;

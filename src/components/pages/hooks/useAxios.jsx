/*pegar dados da api com axios e retornar os dados, loading e error */
import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
  const [response, setResponse] = useState(null); //dados da api
  const [loading, setLoading] = useState(false); //loading
  const [error, setError] = useState(""); //error

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

  const fetchData = async (param) => {
    /*tenta pegar os dados da api, se der erro, retorna o erro, se não, retorna os dados */
    try {
      setLoading(true);
      const result = await axios(param);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, []);

  return {
    response,
    loading,
    error,
  };
};

export default useAxios;

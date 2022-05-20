import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";


export const useFetch = (url: string) => {
  const [info, setInfo] = useState<AxiosResponse | null | void>(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async() => {
      setLoad(true);
      try {
        setLoad(true);
        const data = await axios.get(url);
        setInfo(data);
      } catch (err) {
        setError(true);
      }
      setLoad(false);
    };
    loadData();
  }, []);

  return { info, load, error };
};

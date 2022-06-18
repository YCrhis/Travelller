import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";


export const useFetch = (url: string) => {
  const [info, setInfo] = useState<AxiosResponse | any | void>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    const loadData = async() => {
      setLoad(true);
      if(info.length !== 0){
        try {
          setLoad(true);
          const data = await axios.get(url);
          setInfo(data);
        } catch (err) {
          setError(true);
        }
        
      }else{
        const data = await axios.get("/api/places")
        setInfo(data)
      }
      
      setLoad(false);
    };
    
    loadData();
  }, [url]);

  return { info, load, error };
};

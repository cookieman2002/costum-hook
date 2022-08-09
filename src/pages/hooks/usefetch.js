import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState({});
  const [isLoading, setIsLOading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(async function () {
    (async function (){

        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setIsLOading(false);
        } catch (error) {
            setError(error);
        }
    })()
  }, []);

  return {data, isLoading, error}
}

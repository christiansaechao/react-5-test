import { useState, useEffect } from "react";

export const useGetData = (url: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      setLoading(true);
      const data = await fetch(url).then((res) => res.json());

      if (!data) {
        throw new Error("There was an issue getting data from the api");
      }

      setData(data);
      setLoading(false);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return [data, loading];
};

export const useDebounce = (input: string) => {
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    setInterval(() => {
      setDebouncedValue(input);
    }, 3000);
  }, [input]);
  
  return debouncedValue;
};

// useDebounce,

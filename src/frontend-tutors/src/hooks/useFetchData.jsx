import { useState, useEffect } from "react";

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url === "/api/tutor/new") {
      setLoading(false);
      return;
    }
    // const backend = "http://127.0.0.1:8000";
    const backend = "https://t3a2-full-stack-app.onrender.com";
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await fetch(backend + url, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

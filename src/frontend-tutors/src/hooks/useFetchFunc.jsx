import { useState, useEffect } from "react";

export function useFetchFunc(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backend = "http://127.0.0.1:8000/api";
  const fetchData = async (json) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(backend + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });
      const result = await response.json();
      if (!response.ok) throw new Error("Network response was not ok");
      console.log(response);
      setError(null);
      setLoading(false);
      return result;
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { fetchData, loading, error };
}

import { useState, useEffect } from "react";

export function useFetchFunc(url, method) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backend = "http://127.0.0.1:8000";
  const fetchData = async (json) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(backend + url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || response.statusText);
      }
      const result = await response.json();
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

import { useState, useEffect } from "react";

export function useFetchFunc(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backend = "http://127.0.0.1:8000/api";
  const fetchData = async (json) => {
    try {
      const response = await fetch(backend + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(json),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setError(null);
      setLoading(false);
      return result;
    } catch (error) {
      setError(error);
    }
  };

  return { fetchData, loading, error };
}

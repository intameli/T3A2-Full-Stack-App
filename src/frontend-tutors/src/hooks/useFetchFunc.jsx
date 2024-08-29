import { useState } from "react";

export function useFetchFunc(path, method, token = false) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backend_url = "http://127.0.0.1:8000";

  const fetchData = async (json = false) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(backend_url + path, {
        method: method,
        headers: {
          ...(json && { "Content-Type": "application/json" }),
          ...(token && { "Authorization": `Bearer ${token}` }),
        },
        ...(json && { body: JSON.stringify(json) }),
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

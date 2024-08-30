import { useState } from "react";

export function useFetchFunc(path, method, token = false) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const backend_url = "https://t3a2-full-stack-app.onrender.com";

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
      const result = await response.json();
      if (!response.ok) {
        // const errorData = await response.json();
        throw new Error(result.error || result.message || response.statusText);
      }
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

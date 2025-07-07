import axios from "axios";
import React, { useState } from "react";

const useFetchData = <T = any>() => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (api: string, token: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setItems(response?.data?.items || []);
    } catch (error: any) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return { items, loading, error, fetchData };
};

export default useFetchData;

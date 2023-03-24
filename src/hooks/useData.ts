import React from "react";
import { apiClient } from "../services/apiClient";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

export const useData = <T>(endpoint: string) => {
  const [data, setData] = React.useState<T[]>();
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });

    return controller.abort();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};

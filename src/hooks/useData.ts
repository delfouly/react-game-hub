import React from "react";
import { AxiosRequestConfig } from "axios";

import { apiClient } from "../services/apiClient";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

//Generic hook to ftch data
export const useData = <T>(
  endpoint: string,
  params?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = React.useState<T[]>();
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, params)
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });

      return controller.abort();
    },
    deps ? [...deps] : []
  );

  return {
    data,
    error,
    isLoading,
  };
};

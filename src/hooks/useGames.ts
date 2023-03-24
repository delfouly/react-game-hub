import React from "react";
import { apiClient } from "../services/apiClient";

export type Game = {
  id: number;
  name: string;
  background_image: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

export const useGames = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err));

    return controller.abort();
  }, []);

  return {
    games,
    error,
  };
};

import React from "react";
import { apiClient } from "../services/apiClient";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
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

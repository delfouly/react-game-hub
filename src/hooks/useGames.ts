import { GamesQuery } from "../App";
import { useData } from "./useData";

export const useGames = (gamesQuery?: GamesQuery) => {
  const { data, ...rest } = useData<Game>(
    "games",
    {
      params: {
        genres: gamesQuery?.genreId,
        platforms: gamesQuery?.platformId,
        ordering: gamesQuery?.sortKey,
      },
    },
    [gamesQuery]
  );

  return {
    games: data,
    ...rest,
  };
};

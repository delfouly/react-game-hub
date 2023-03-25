import { useData } from "./useData";

export const useGames = (gamesQuery?: GamesQuery) => {
  const { data, ...rest } = useData<Game>(
    "games",
    {
      params: {
        genres: gamesQuery?.genreId,
        platforms: gamesQuery?.platformId,
        ordering: gamesQuery?.sortKey,
        search: gamesQuery?.search,
      },
    },
    [gamesQuery]
  );

  return {
    games: data,
    ...rest,
  };
};

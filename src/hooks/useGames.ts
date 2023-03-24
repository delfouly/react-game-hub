import { useData } from "./useData";
import { Genre } from "./useGenres";

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

export const useGames = (genreId?: Genre["id"]) => {
  const { data, ...rest } = useData<Game>(
    "games",
    { params: { genres: genreId } },
    [genreId]
  );

  return {
    games: data,
    ...rest,
  };
};

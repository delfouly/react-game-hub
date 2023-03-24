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

type Props = {
  genreId?: Genre["id"];
  platformId?: Platform["id"];
};

export const useGames = ({ genreId, platformId }: Props) => {
  const { data, ...rest } = useData<Game>(
    "games",
    { params: { genres: genreId, platforms: platformId } },
    [genreId, platformId]
  );

  return {
    games: data,
    ...rest,
  };
};

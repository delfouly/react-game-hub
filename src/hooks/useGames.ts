import { useData } from "./useData";

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

export const useGames = () => {
  const { data, ...rest } = useData<Game>("games");

  return {
    games: data,
    ...rest,
  };
};

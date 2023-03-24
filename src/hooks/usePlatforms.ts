import { useData } from "./useData";
import { Platform } from "./useGames";
import { Genre } from "./useGenres";

export const usePlatforms = (genreId?: Genre["id"]) => {
  const { data, ...rest } = useData<Platform>(
    "platforms",
    { params: genreId && { genres: genreId } },
    [genreId]
  );

  return {
    platforms: data,
    ...rest,
  };
};

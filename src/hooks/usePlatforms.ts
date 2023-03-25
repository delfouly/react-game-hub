import { useData } from "./useData";

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

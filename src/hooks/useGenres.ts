import { useData } from "./useData";

export const useGenres = () => {
  const { data, ...rest } = useData<Genre>("genres");

  return {
    genres: data,
    ...rest,
  };
};

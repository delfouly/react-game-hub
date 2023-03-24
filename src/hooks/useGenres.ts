import { useData } from "./useData";

export type Genre = {
  id: number;
  name: string;
};

export const useGenres = () => {
  const { data, ...rest } = useData<Genre>("genres");

  return {
    genres: data,
    ...rest,
  };
};

import { useData } from "./useData";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export const useGenres = () => {
  const { data, ...rest } = useData<Genre>("genres");

  return {
    genres: data,
    ...rest,
  };
};

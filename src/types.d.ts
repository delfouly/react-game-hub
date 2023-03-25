type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

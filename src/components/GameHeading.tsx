import React from "react";
import { Heading } from "@chakra-ui/react";

import genres from "../data/genres";
import platforms from "../data/platforms";

export const GameHeading = (gamesQuery: GamesQuery) => {
  const title = React.useMemo(() => {
    const { genreId, platformId } = gamesQuery;
    const platform = platformId
      ? platforms.filter((e) => e.id === platformId)[0].name + " "
      : "";
    const genre = genreId
      ? genres.filter((e) => e.id === genreId)[0].name + " "
      : "";
    [0];

    return `${platform}${genre}Games`;
  }, [gamesQuery]);

  return (
    <Heading marginBottom={2} marginLeft={5}>
      {title}
    </Heading>
  );
};

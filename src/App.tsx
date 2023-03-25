import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import NavBar from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortKey, SortSelector } from "./components/SortSelector";

export type GamesQuery = {
  genreId?: Genre["id"];
  platformId?: Platform["id"];
  sortKey?: SortKey;
};

export function App() {
  const [gamesQuery, setGamesQuery] = React.useState<GamesQuery>(
    {} as GamesQuery
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"side"}>
          <GenreList
            onGenrePress={(genreId) =>
              setGamesQuery((prev) => ({ ...prev, genreId }))
            }
            selectedGenreId={gamesQuery?.genreId}
          />
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        <PlatformSelector
          onSelect={(platformId) =>
            setGamesQuery((prev) => ({ ...prev, platformId }))
          }
        />
        <SortSelector
          onSelect={(sortKey) =>
            setGamesQuery((prev) => ({
              ...prev,
              sortKey: sortKey === "none" ? undefined : sortKey,
            }))
          }
        />
        <GamesGrid gamesQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

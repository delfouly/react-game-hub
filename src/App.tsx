import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import NavBar from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export function App() {
  const [genreId, setGenreId] = React.useState<Genre["id"]>();
  const [platformId, setPlatformId] = React.useState<Platform["id"]>();
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
          <GenreList onGenrePress={setGenreId} selectedGenreId={genreId} />
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        <PlatformSelector onSelect={setPlatformId} />
        <GamesGrid genreId={genreId} platformId={platformId} />
      </GridItem>
    </Grid>
  );
}

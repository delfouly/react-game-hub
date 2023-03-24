import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";

export function App() {
  const [genreId, setGenreId] = React.useState<Genre["id"]>();
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
          <GenreList onGenrePress={setGenreId} />
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        <GamesGrid genreId={genreId} />
      </GridItem>
    </Grid>
  );
}

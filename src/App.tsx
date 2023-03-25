import React from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";

import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import NavBar from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";

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
      <GridItem area={"nav"}>
        <NavBar
          onSubmitSearchQuery={(search) => {
            setGamesQuery((prev) => ({ ...prev, search }));
          }}
        />
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

      <GridItem area={"main"}>
        <GameHeading {...gamesQuery} />
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              onSelect={(platformId) =>
                setGamesQuery((prev) => ({ ...prev, platformId }))
              }
            />
          </Box>

          <SortSelector
            onSelect={(sortKey) =>
              setGamesQuery((prev) => ({
                ...prev,
                sortKey: sortKey === "none" ? undefined : sortKey,
              }))
            }
          />
        </Flex>

        <GamesGrid gamesQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

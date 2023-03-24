import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import NavBar from "./components/NavBar";

export function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav""main"`,
        lg: `"nav nav""side main"`,
      }}
      // gridTemplateRows={"50px 1fr 30px"}
      // gridTemplateColumns={"150px 1fr"}
      // h="200px"
      // gap="1"
      // color="blackAlpha.700"
      // fontWeight="bold"
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
          <GenreList />
        </GridItem>
      </Show>

      <GridItem pl="2" area={"main"}>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

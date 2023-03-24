import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";

export const GamesGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10"
      >
        {games.map((game) => {
          const { id, name, background_image } = game;
          return (
            <GameCard
              key={id}
              name={name}
              background_image={background_image}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

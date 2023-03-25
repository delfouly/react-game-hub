import { SimpleGrid, Text } from "@chakra-ui/react";

import { GamesQuery } from "../App";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";

const skeletons = [0, 1, 2, 3, 4, 5, 6];

export const GamesGrid = ({ gamesQuery }: { gamesQuery: GamesQuery }) => {
  const { games, error, isLoading } = useGames(gamesQuery);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10"
      >
        {isLoading
          ? skeletons.map((e) => (
              <GameCardContainer key={e}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : games?.map((game: Game) => {
              const {
                id,
                name,
                background_image,
                parent_platforms,
                metacritic,
              } = game;
              return (
                <GameCardContainer key={id}>
                  <GameCard
                    name={name}
                    image={background_image}
                    platforms={parent_platforms.map((e) => ({ ...e.platform }))}
                    score={metacritic}
                  />
                </GameCardContainer>
              );
            })}
      </SimpleGrid>
    </>
  );
};

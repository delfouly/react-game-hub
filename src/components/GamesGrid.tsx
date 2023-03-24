import { SimpleGrid, Text } from "@chakra-ui/react";

import { Game, Platform, useGames } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";

const skeletons = [0, 1, 2, 3, 4, 5, 6];

type Props = {
  genreId?: Genre["id"];
  platformId?: Platform["id"];
};
export const GamesGrid = ({ genreId, platformId }: Props) => {
  console.log("platformId:", platformId);
  const { games, error, isLoading } = useGames({ genreId, platformId });

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10"
      >
        {isLoading &&
          skeletons.map((e) => (
            <GameCardContainer key={e}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.map((game: Game) => {
          const { id, name, background_image, parent_platforms, metacritic } =
            game;
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

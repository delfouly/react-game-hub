import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import { Game, Platform } from "../hooks/useGames";
import { GameBadge } from "./GameBadge";
import { PlatformsIconsList } from "./PlatformsIconsList";

type Props = Pick<Game, "name"> & {
  image: Game["background_image"];
  platforms: Platform[];
  score: Game["metacritic"];
};
export const GameCard = ({ image, name, platforms, score }: Props) => {
  return (
    <Card overflow="hidden">
      <Image src={image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformsIconsList platforms={platforms} />
          <GameBadge score={score} />
        </HStack>
      </CardBody>
    </Card>
  );
};

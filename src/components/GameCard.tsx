import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import { getCroppedImage } from "../services/cropImage";
import { GameBadge } from "./GameBadge";
import { PlatformsIconsList } from "./PlatformsIconsList";

type Props = Pick<Game, "name"> & {
  image?: Game["background_image"];
  platforms: Platform[];
  score: Game["metacritic"];
};

export const GameCard = ({ image, name, platforms, score }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(image)} />
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

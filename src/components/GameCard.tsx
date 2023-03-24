import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames";
import { PlatformsIconsList } from "./PlatformsIconsList";

type Props = Pick<Game, "name" | "background_image"> & {
  platforms: Platform[];
};
export const GameCard = ({ background_image, name, platforms }: Props) => {
  console.log("platforms:", platforms);

  return (
    <Card overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <CardHeader>{name}</CardHeader>
        <PlatformsIconsList platforms={platforms} />
      </CardBody>
    </Card>
  );
};

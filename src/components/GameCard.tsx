import { Card, CardBody, CardHeader, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

export const GameCard = ({
  background_image,
  name,
}: Pick<Game, "name" | "background_image">) => {
  console.log("background_image:", background_image);

  return (
    <Card overflow="hidden">
      <Image src={background_image} />
      <CardBody>
        <CardHeader>{name}</CardHeader>
      </CardBody>
    </Card>
  );
};

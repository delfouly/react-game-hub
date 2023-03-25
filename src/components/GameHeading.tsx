import { Heading } from "@chakra-ui/react";

type Props = {
  genre?: Genre["name"];
  platform?: Platform["name"];
};
export const GameHeading = ({ genre, platform }: Props) => {
  return (
    <Heading marginBottom={2} marginLeft={5}>
      {platform + " "}
      {genre + " "}Games
    </Heading>
  );
};

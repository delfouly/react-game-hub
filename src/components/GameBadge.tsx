import { Badge } from "@chakra-ui/react";

export const GameBadge = ({ score }: { score: Game["metacritic"] }) => {
  return (
    <Badge ml="1" colorScheme={score > 80 ? "green" : "yellow"}>
      {score}
    </Badge>
  );
};

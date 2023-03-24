import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};
export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={"300px"} borderRadius={10} overflow="hidden" className="card">
      {children}
    </Box>
  );
};

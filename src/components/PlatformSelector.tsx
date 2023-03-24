import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

import { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import { usePlatforms } from "../hooks/usePlatforms";

type Props = {
  onSelect: (id: Platform["id"]) => void;
  genreId?: Genre["id"];
};

export const PlatformSelector = ({ onSelect, genreId }: Props) => {
  const { platforms, isLoading } = usePlatforms(genreId);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Menu isOpen={isOpen}>
      <>
        <MenuButton
          as={Button}
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={<BsChevronDown color="gray.500" />}
        >
          Platforms
        </MenuButton>

        <MenuList>
          {isLoading && isOpen ? (
            <Spinner />
          ) : (
            platforms?.map((e) => (
              <MenuItem
                key={e.id}
                onClick={() => {
                  onSelect(e.id);
                  setIsOpen(false);
                }}
              >
                {e.name}
              </MenuItem>
            ))
          )}
        </MenuList>
      </>
    </Menu>
  );
};

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
import platforms from "../data/platforms";

type Props = {
  onSelect: (id: Platform["id"]) => void;
  genreId?: Genre["id"];
};

export const PlatformSelector = ({ onSelect, genreId }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const platformNameRef = React.useRef("Platforms");

  return (
    <Menu isOpen={isOpen}>
      <>
        <MenuButton
          as={Button}
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={<BsChevronDown color="gray.500" />}
        >
          {platformNameRef.current}
        </MenuButton>

        <MenuList>
          {platforms.map((e) => (
            <MenuItem
              key={e.id}
              onClick={() => {
                onSelect(e.id);
                setIsOpen(false);
                platformNameRef.current = e.name;
              }}
            >
              {e.name}
            </MenuItem>
          ))}
        </MenuList>
      </>
    </Menu>
  );
};

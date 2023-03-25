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

type Props = {
  onSelect: (name: SortItem) => void;
};

const SORT = [
  "Relevance",
  "Date added",
  "Name",
  "Release date",
  "Popularity",
  "Average rating",
] as const;

export type SortItem = typeof SORT[number];

export const SortSelector = ({ onSelect }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sortNameRef = React.useRef<SortItem>(SORT[0]);

  return (
    <Menu isOpen={isOpen}>
      <>
        <MenuButton
          as={Button}
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={<BsChevronDown color="gray.500" />}
        >
          Order by: {sortNameRef.current}
        </MenuButton>

        <MenuList>
          {isOpen &&
            SORT.map((e) => (
              <MenuItem
                key={e}
                onClick={() => {
                  onSelect(e);
                  setIsOpen(false);
                  sortNameRef.current = e;
                }}
              >
                {e}
              </MenuItem>
            ))}
        </MenuList>
      </>
    </Menu>
  );
};

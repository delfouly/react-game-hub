import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SORT = {
  none: "Relevance",
  added: "Date added",
  name: "Name",
  released: "Release date",
  metacritic: "Popularity",
  rating: "Average rating",
} as const;

export type SortKey = keyof typeof SORT;

type Props = {
  onSelect: (name: SortKey) => void;
};

export const SortSelector = ({ onSelect }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sortKeyRef = React.useRef<SortKey>("none" as SortKey);

  return (
    <Menu isOpen={isOpen}>
      <>
        <MenuButton
          as={Button}
          onClick={() => setIsOpen(!isOpen)}
          rightIcon={<BsChevronDown color="gray.500" />}
        >
          Order by: {SORT[sortKeyRef.current]}
        </MenuButton>

        <MenuList>
          {isOpen &&
            (Object.keys(SORT) as SortKey[]).map((e) => {
              return (
                <MenuItem
                  key={e}
                  onClick={() => {
                    onSelect(e);
                    setIsOpen(false);
                    sortKeyRef.current = e;
                  }}
                >
                  {SORT[e]}
                </MenuItem>
              );
            })}
        </MenuList>
      </>
    </Menu>
  );
};

import React from "react";
import { BsSearch } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export const SearchInput = ({
  onSubmit,
}: {
  onSubmit: (query: string) => void;
}) => {
  const queryRef = React.useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (queryRef.current) {
          onSubmit(queryRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input placeholder="Search games" ref={queryRef} borderRadius={20} />
      </InputGroup>
    </form>
  );
};

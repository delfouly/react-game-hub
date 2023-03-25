import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<BsSearch color="gray.300" />}
      />
      <Input placeholder="Search games" />
    </InputGroup>
  );
};

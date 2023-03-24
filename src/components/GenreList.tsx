import { Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";

export const GenreList = () => {
  const { genres } = useGenres();
  if (!genres || !genres.length) return null;

  return (
    <>
      {genres.map((e) => (
        <Text key={e.id}>{e.name}</Text>
      ))}
    </>
  );
};

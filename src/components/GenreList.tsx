import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImage } from "../services/cropImage";

export const GenreList = () => {
  const { genres } = useGenres();
  if (!genres || !genres.length) return null;
  console.log("genres:", getCroppedImage(genres[0].image_background));

  return (
    <List padding={4}>
      {genres.map((e) => (
        <ListItem key={e.id} paddingY={2}>
          <HStack>
            <Image
              src={getCroppedImage(e.image_background)}
              boxSize="32px"
              borderRadius={8}
            />

            <Text fontSize="xl">{e.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

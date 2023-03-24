import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";
import { getCroppedImage } from "../services/cropImage";

export const GenreList = ({
  onGenrePress,
}: {
  onGenrePress: (genreId: Genre["id"]) => void;
}) => {
  const { genres } = useGenres();
  if (!genres || !genres.length) return null;

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
            <Button
              variant="link"
              onClick={() => onGenrePress(e.id)}
              fontSize="xl"
            >
              {e.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

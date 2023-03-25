import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import genres from "../data/genres";
import { getCroppedImage } from "../services/cropImage";

export const GenreList = ({
  onGenrePress,
  selectedGenreId,
}: {
  onGenrePress: (genreId: Genre["id"]) => void;
  selectedGenreId?: Genre["id"];
}) => {
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List padding={4}>
        {genres.map((e) => (
          <ListItem key={e.id} paddingY={2}>
            <HStack>
              <Image
                src={getCroppedImage(e.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                variant="link"
                onClick={() => onGenrePress(e.id)}
                fontSize="xl"
                fontWeight={e.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {e.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

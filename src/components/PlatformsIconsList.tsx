import {
  FaPlaystation,
  FaWindows,
  FaApple,
  FaAndroid,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { Platform } from "../hooks/useGames";

export const PlatformsIconsList = ({
  platforms,
}: {
  platforms: Platform[];
}) => {
  const mappedIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={mappedIcons[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

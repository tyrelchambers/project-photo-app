import { HStack, Icon, Text } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export function ProfileHeader() {
  return (
    <HStack justifyContent="space-between" py="16" px="8" pb="4">
      <Text fontSize="xl" fontWeight="bold">
        imtyrelchambers
      </Text>

      <HStack>
        <Icon as={Ionicons} name="menu" size="2xl" />
      </HStack>
    </HStack>
  );
}

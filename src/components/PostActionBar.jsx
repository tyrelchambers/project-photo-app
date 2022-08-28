import { HStack, Icon, VStack } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export function PostActionBar() {
  return (
    <VStack my="3" justifyContent="space-between" width="40" space="4">
      <Icon
        as={Ionicons}
        name="heart-outline"
        size="lg"
        color="gray.100"
        style={{
          shadowColor: "black",
          shadowOpacity: 0.6,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      />
      <Icon
        as={Ionicons}
        name="chatbubble-outline"
        size="lg"
        color="gray.100"
        style={{
          shadowColor: "black",
          shadowOpacity: 0.6,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      />
      <Icon
        as={Ionicons}
        name="share-social-outline"
        size="lg"
        color="gray.100"
        style={{
          shadowColor: "black",
          shadowOpacity: 0.6,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      />
      <Icon
        as={Ionicons}
        name="bookmark-outline"
        size="lg"
        color="gray.100"
        style={{
          shadowColor: "black",
          shadowOpacity: 0.6,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        }}
      />
    </VStack>
  );
}

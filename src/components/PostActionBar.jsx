import { HStack, Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export function PostActionBar() {
  return (
    <HStack my="3" justifyContent="space-between" width="40">
      <Icon as={Ionicons} name="heart-outline" size="lg" />
      <Icon as={Ionicons} name="chatbubble-outline" size="lg" />
      <Icon as={Ionicons} name="share-social-outline" size="lg" />
      <Icon as={Ionicons} name="bookmark-outline" size="lg" />
    </HStack>
  );
}

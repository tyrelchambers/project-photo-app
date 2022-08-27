import { Icon, Input, View } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";

export function SearchInput() {
  return (
    <View pt="16" pb="4" px="6">
      <Input
        placeholder="Search People"
        width="100%"
        px="1"
        borderWidth="0"
        fontSize="14"
        backgroundColor="gray.200"
        borderRadius="lg"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<Icon as={Ionicons} name="search" />}
          />
        }
      />
    </View>
  );
}

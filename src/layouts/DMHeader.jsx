import { HStack, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { HeaderWrapper } from "./HeaderWrapper";

export function DMHeader({ navigation }) {
  return (
    <HeaderWrapper>
      <HStack alignItems="center">
        <Icon
          as={Ionicons}
          name="chevron-back-outline"
          size="lg"
          color="gray.100"
          mr="2"
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        />
        <Text fontSize="lg" fontWeight="bold" color="gray.100">
          Messages
        </Text>
      </HStack>

      <HStack>
        <Icon
          as={Ionicons}
          name="add"
          color="gray.100"
          fontWeight="bold"
          size="2xl"
        />
      </HStack>
    </HeaderWrapper>
  );
}

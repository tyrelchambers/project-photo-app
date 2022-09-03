import { HStack, Icon, Text } from "native-base";
import { HeaderWrapper } from "./HeaderWrapper";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

export function CaptionHeader({ navigation }) {
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
          Add a caption
        </Text>
      </HStack>

      <Text color="indigo.400" fontSize="lg">
        Share
      </Text>
    </HeaderWrapper>
  );
}

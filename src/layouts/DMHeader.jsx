import { HStack, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";

export function DMHeader({ navigation }) {
  return (
    <HStack
      pt="12"
      pb="4"
      px="6"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="gray.900"
    >
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
    </HStack>
  );
}

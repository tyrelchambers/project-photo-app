import { HStack, Text } from "native-base";
import { HeaderWrapper } from "./HeaderWrapper";

export function NewPostHeader({ navigation }) {
  return (
    <HeaderWrapper>
      <HStack alignItems="center">
        <Text fontSize="lg" fontWeight="bold" color="gray.100">
          New post
        </Text>
      </HStack>

      <Text color="indigo.400" fontSize="lg">
        Next
      </Text>
    </HeaderWrapper>
  );
}

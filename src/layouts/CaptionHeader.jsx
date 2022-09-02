import { HStack, Text } from "native-base";
import { HeaderWrapper } from "./HeaderWrapper";

export function CaptionHeader() {
  return (
    <HeaderWrapper>
      <HStack alignItems="center">
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

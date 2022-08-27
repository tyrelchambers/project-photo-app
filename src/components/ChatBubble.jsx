import { format } from "date-fns";
import { Avatar, Box, Text, HStack, Stack } from "native-base";

export function ChatBubble({ data }) {
  const currentUser = 1;
  const isYou = data.user.id == currentUser;

  const Left = () => (
    <HStack px="4" space="3">
      <Avatar source={{ uri: data.user.avatar }} />
      <Stack direction="column" space="2" flex="1">
        <Box borderRadius="xl" backgroundColor="gray.100" p="3">
          <Text color="gray.600">{data.body}</Text>
        </Box>
        <Text color="gray.500" fontSize="xs">
          {format(new Date(data.created), "MMMM do")}
        </Text>
      </Stack>
    </HStack>
  );

  const Right = () => (
    <HStack px="4" space="3">
      <Stack direction="column" space="2" flex="1">
        <Box borderRadius="xl" borderWidth="1" borderColor="gray.300" p="3">
          <Text color="gray.500">{data.body}</Text>
        </Box>
        <Text color="gray.500" fontSize="xs">
          {format(new Date(data.created), "MMMM do")}
        </Text>
      </Stack>
      <Avatar source={{ uri: data.user.avatar }} />
    </HStack>
  );

  return isYou ? <Right /> : <Left />;
}

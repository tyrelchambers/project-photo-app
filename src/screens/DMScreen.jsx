import {
  Avatar,
  HStack,
  Icon,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { SearchInput } from "../components/Search";
import { Ionicons } from "@expo/vector-icons";
import { formatDistanceToNow, formatDistanceToNowStrict } from "date-fns";

const messages = [
  {
    preview:
      "Hey this is a long message for you to look at and maybe consider.",
    sent_at: "Sat Aug 27 2022 12:30:59 GMT-0400",
    user: {
      name: "Tyrel Chambers",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  },
  {
    preview:
      "Hey this is a long message for you to look at and maybe consider.",
    sent_at: "Sat Aug 27 2022 12:30:59 GMT-0400",
    user: {
      name: "Tyrel Chambers",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  },
  {
    preview:
      "Hey this is a long message for you to look at and maybe consider.",
    sent_at: "Sat Aug 27 2022 12:30:59 GMT-0400",
    user: {
      name: "Tyrel Chambers",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  },
  {
    preview:
      "Hey this is a long message for you to look at and maybe consider.",
    sent_at: "Sat Aug 27 2022 12:30:59 GMT-0400",
    user: {
      name: "Tyrel Chambers",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  },
];

export function DMScreen() {
  return (
    <HStack>
      <ScrollView mx="3">
        <Input
          placeholder="Search People"
          px="3"
          borderWidth="0"
          fontSize="14"
          backgroundColor="gray.200"
          borderRadius="lg"
          flex="1"
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

        <VStack mt="4">
          <Text fontWeight="bold" mb="2">
            Messages
          </Text>
          {messages.map((m, i) => (
            <HStack key={i} my="3">
              <Avatar
                source={{
                  uri: m.user.avatar,
                }}
                mr="2"
              />

              <VStack flex="1">
                <Text fontWeight="bold">{m.user.name}</Text>
                <HStack flex="1" alignItems="center">
                  <Text numberOfLines={1} color="gray.500" flex="1">
                    {m.preview}
                  </Text>
                  <Icon
                    as={Ionicons}
                    name="ellipse"
                    size="2xs"
                    px="3"
                    color="gray.300"
                  />
                  <Text color="gray.500">
                    {formatDistanceToNowStrict(new Date(m.sent_at))}
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </ScrollView>
    </HStack>
  );
}

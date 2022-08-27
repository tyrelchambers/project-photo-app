import { Box, Input, ScrollView, Text, TextArea, VStack } from "native-base";
import { ChatBubble } from "../components/ChatBubble";

const messages = [
  {
    body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    created: "Sat Aug 27 2022 08:30:47 GMT-0400",
    user: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      id: "2",
    },
  },
  {
    body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    created: "Sat Aug 27 2022 08:30:47 GMT-0400",

    user: {
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      id: "1",
    },
  },
  {
    body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    created: "Sat Aug 27 2022 08:30:47 GMT-0400",

    user: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      id: "2",
    },
  },
  {
    body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    created: "Sat Aug 27 2022 08:30:47 GMT-0400",
    user: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      id: "2",
    },
  },
  {
    body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    created: "Sat Aug 27 2022 08:30:47 GMT-0400",

    user: {
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      id: "1",
    },
  },
  {
    body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    created: "Sat Aug 27 2022 08:30:47 GMT-0400",

    user: {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      id: "2",
    },
  },
];

export function Message() {
  return (
    <VStack>
      <ScrollView mb="32">
        <VStack space="4">
          {messages.map((m, i) => (
            <ChatBubble data={m} key={i} />
          ))}
        </VStack>
      </ScrollView>
      <Box position="fixed" bottom="100px">
        <TextArea
          mx="3"
          placeholder="Input"
          borderRadius="3xl"
          backgroundColor="gray.800"
          color="white"
          p="3"
          h="40px"
          maxH="100px"
        />
      </Box>
    </VStack>
  );
}

import {
  AspectRatio,
  Heading,
  Image,
  ScrollView,
  TextArea,
  VStack,
} from "native-base";
import React from "react";
import { useNewPostStore } from "../hooks/useNewPostStore";

export function PostCaption() {
  const postStore = useNewPostStore();

  return (
    <ScrollView>
      <AspectRatio
        key={postStore.images.id}
        ratio={{
          base: 16 / 9,
        }}
        w="full"
        borderColor="gray.900"
        borderWidth="2"
      >
        <Image
          source={{
            uri: `${postStore.images.uri}`,
          }}
          alt=""
        />
      </AspectRatio>
      <VStack p="4" my="4">
        <Heading color="gray.100" fontSize="xl">
          Photo details
        </Heading>
        <TextArea
          h={20}
          placeholder="Write your caption..."
          mt="6"
          backgroundColor="gray.800"
          borderColor="gray.600"
          color="gray.100"
        />
      </VStack>
    </ScrollView>
  );
}

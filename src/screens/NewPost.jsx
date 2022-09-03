import { AspectRatio, Box, Center, FlatList, Image, Text } from "native-base";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useNewPostStore } from "../hooks/useNewPostStore";
import { useMediaLibrary } from "../hooks/useMediaLibrary";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import { NewPostImagePreview } from "../components/NewPostImagePreview";

export function NewPost() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const { photos } = useMediaLibrary();

  const postStore = useNewPostStore();

  useEffect(() => {
    if (photos) {
      console.log(photos[0]);
      postStore.setImages(photos[0]);
    }
  }, [photos]);

  if (status && !status.granted && status.canAskAgain) {
    requestPermission();
  }

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => postStore.setImages(item)}
      style={{
        borderColor: "gray.900",
        borderWidth: "2",
        width: "25%",
      }}
    >
      <AspectRatio
        key={item.id}
        ratio={{
          base: 4 / 4,
        }}
      >
        <Image
          source={{
            uri: `${item.uri}`,
          }}
          alt=""
        />
      </AspectRatio>
    </Pressable>
  );

  console.log(postStore.images);

  return (
    <>
      <Box my="10">{postStore.images && <NewPostImagePreview />}</Box>
      {photos && (
        <FlatList
          numColumns={4}
          data={photos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </>
  );
}

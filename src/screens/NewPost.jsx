import { AspectRatio, Box, FlatList, Image, Text } from "native-base";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useNewPostStore } from "../hooks/useNewPostStore";

export function NewPost() {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [photos, setPhotos] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const postStore = useNewPostStore();

  useEffect(() => {
    (async () => {
      const allPhotos = await MediaLibrary.getAssetsAsync({
        mediaType: ["photo"],
      });

      setPhotos(allPhotos.assets);
      postStore.setImages(allPhotos.assets[0]);
    })();
  }, []);

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

  console.log(postStore);

  return (
    <>
      <Box my="10">
        {postStore.images && (
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
        )}
      </Box>
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

// {"creationTime": 1522437259365, "duration": 0, "filename": "IMG_0006.HEIC", "height": 3024, "id": "CC95F08C-88C3-4012-9D6D-64A413D254B3/L0/001", "mediaSubtypes": ["hdr"], "mediaType": "photo", "modificationTime": 1662070040589, "uri": "ph://CC95F08C-88C3-4012-9D6D-64A413D254B3", "width": 4032}, {"creationTime": 1344462930400, "duration": 0, "filename": "IMG_0005.JPG", "height": 2002, "id": "ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED/L0/001", "mediaSubtypes": [], "mediaType": "photo", "modificationTime": 1441224148000, "uri": "ph://ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED", "width": 3000}

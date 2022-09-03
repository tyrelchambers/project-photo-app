import * as MediaLibrary from "expo-media-library";

export const fetchPhotos = async ({ after = "" }) => {
  const photos = await MediaLibrary.getAssetsAsync({
    mediaType: ["photo"],
    first: 100,
    ...(after && { after }),
  });

  return photos;
};

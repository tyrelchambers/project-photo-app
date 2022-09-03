import { Center, Image } from "native-base";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useNewPostStore } from "../hooks/useNewPostStore";

export function NewPostImagePreview() {
  const postStore = useNewPostStore();
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={pinchGesture}>
      <Center>
        {console.log(scale.value)}

        <Image
          source={{ uri: postStore.images.uri }}
          alt=""
          style={{
            height: 200,
            aspectRatio:
              postStore.images.width < postStore.images.height
                ? 9 / 16
                : 16 / 9,
          }}
        />
      </Center>
    </GestureDetector>
  );
}

import { format } from "date-fns";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Image,
  Modal,
  ScrollView,
  Text,
  useTheme,
  VStack,
} from "native-base";
import { useMemo, useState } from "react";
import { Alert } from "react-native";
import {
  Directions,
  FlingGestureHandler,
  Gesture,
  GestureDetector,
  State,
  Swipeable,
} from "react-native-gesture-handler";

export function PostModal({ post }) {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(true);
  const swipeDown = useMemo(() => {
    Gesture.Fling()
      .direction(Directions.DOWN)
      .onStart(() => {
        console.log("hi");
      });
  }, []);

  return (
    <Modal isOpen={modalVisible} onClose={setModalVisible} size="full">
      <Modal.Content background="gray.900" p="0">
        <FlingGestureHandler
          direction={Directions.DOWN}
          onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === State.ACTIVE) {
              Alert.alert("I'm flinged!");
            }
          }}
        >
          <Modal.Body>
            <AspectRatio
              ratio={{
                base: 9 / 16,
                md: 16 / 9,
              }}
              width="full"
            >
              <Image
                source={{
                  uri: post.imageUrl,
                }}
                alt="image"
                borderRadius="3xl"
              />
            </AspectRatio>
            <VStack py="4">
              <Text fontWeight="bold" color="gray.100">
                {post.user.username}
              </Text>
              <Text color={colors.gray[100]}>{post.caption}</Text>
              <Text mt="2" color={colors.gray[300]} fontSize="xs">
                {format(new Date(post.created), "MMMM do")}
              </Text>
            </VStack>
          </Modal.Body>
        </FlingGestureHandler>
      </Modal.Content>
    </Modal>
  );
}

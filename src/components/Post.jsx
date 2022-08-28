import { format } from "date-fns";
import { AspectRatio, Box, Image, Text, useTheme, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { PostActionBar } from "./PostActionBar";

export function Post({ post }) {
  const { colors } = useTheme();

  return (
    <Box my="6" mx="3" position="relative">
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
      <Box position="absolute" top="3" left="3">
        <PostActionBar />
      </Box>

      <VStack position="absolute" bottom="0" left="0" right="0">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            padding: 10,
            borderBottomLeftRadius: 23,
            borderBottomRightRadius: 23,
          }}
        >
          <Text fontWeight="bold" color="gray.100">
            {post.user.username}
          </Text>
          <Text color={colors.gray[100]}>{post.caption}</Text>
          <Text mt="2" color={colors.gray[300]} fontSize="xs">
            {format(new Date(post.created), "MMMM do")}
          </Text>
        </LinearGradient>
      </VStack>
    </Box>
  );
}

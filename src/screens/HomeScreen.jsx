import { ScrollView, VStack } from "native-base";
import { Post } from "../components/Post";

const posts = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1661493817330-fae405864560?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    caption:
      "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    likes: 10,
    created: "Fri Aug 26 2022 23:10:46 GMT-0400 ",
    user: {
      username: "imtyrelchambers",
    },
    comments: [
      {
        body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
        user: {
          username: "tony_lombardi",
        },
      },
      {
        body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
        user: {
          username: "tony_lombardi",
        },
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1661503271250-ea3706816770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    caption:
      "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    likes: 10,
    created: "Fri Aug 26 2022 23:10:46 GMT-0400 ",

    user: {
      username: "imtyrelchambers",
    },
    comments: [
      {
        body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
        user: {
          username: "tony_lombardi",
        },
      },
      {
        body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
        user: {
          username: "tony_lombardi",
        },
      },
    ],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1661516268426-271d93461c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    caption:
      "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
    likes: 10,
    created: "Fri Aug 26 2022 23:10:46 GMT-0400 ",

    user: {
      username: "imtyrelchambers",
    },
    comments: [
      {
        body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
        user: {
          username: "tony_lombardi",
        },
      },
      {
        body: "I'm baby try-hard lomo authentic literally cred viral. Mlkshk yes plz craft beer, fit hoodie scenester tote bag tumblr vegan leggings bodega boys vexillologist pabst banh mi. Street art direct trade four dollar toast heirloom.",
        user: {
          username: "tony_lombardi",
        },
      },
    ],
  },
];
export function HomeScreen() {
  return (
    <ScrollView
      maxW="full"
      _contentContainerStyle={{
        mb: "4",
      }}
    >
      <VStack flex="1">
        {posts.map((post, i) => (
          <Post post={post} key={i} />
        ))}
      </VStack>
    </ScrollView>
  );
}

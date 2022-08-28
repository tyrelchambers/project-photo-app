import { HStack, Icon, IconButton, Text, useTheme } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export function Header({ navigation }) {
  const { colors } = useTheme();

  return (
    <HStack pt="16" px="4" justifyContent="space-between" alignItems="center">
      <HStack>
        <Text fontWeight="bold" color={colors.white}>
          Project-photo-app
        </Text>
      </HStack>

      <HStack>
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="notifications-outline"
              color={colors.gray[100]}
            />
          }
        />
        <IconButton
          onPress={() => navigation.navigate("Messages")}
          icon={
            <Icon
              as={Ionicons}
              name="chatbubble-ellipses-outline"
              color={colors.gray[100]}
            />
          }
        />
      </HStack>
    </HStack>
  );
}

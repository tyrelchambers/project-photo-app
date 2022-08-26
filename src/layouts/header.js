import { HStack, Icon, IconButton, Text, useTheme } from "native-base";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export function Header() {
  const { colors } = useTheme();

  return (
    <HStack py="16" px="4" justifyContent="space-between" alignItems="center">
      <HStack>
        <Text fontWeight="bold">Project-photo-app</Text>
      </HStack>

      <HStack>
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="notifications-outline"
              color={colors.gray[700]}
            />
          }
        />

        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="chatbubble-ellipses-outline"
              color={colors.gray[700]}
            />
          }
        />
      </HStack>
    </HStack>
  );
}

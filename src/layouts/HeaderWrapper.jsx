import { HStack } from "native-base";

export function HeaderWrapper(props) {
  return (
    <HStack
      pt="12"
      pb="4"
      px="6"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="gray.900"
    >
      {props.children}
    </HStack>
  );
}

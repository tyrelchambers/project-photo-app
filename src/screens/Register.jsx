import {
  Box,
  Button,
  Divider,
  FormControl,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "native-base";

export function Register({ navigation }) {
  return (
    <VStack justifyContent="center" h="full">
      <VStack p="6">
        <Heading color="gray.100" size="2xl">
          Register
        </Heading>
        <Text color="gray.300" fontSize="xl">
          Welcome to Mezz! Create an account and let's get started!
        </Text>
        <FormControl mt="6">
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                variant="outline"
                borderColor="gray.700"
                p={2}
                color="gray.100"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                variant="outline"
                borderColor="gray.700"
                p={2}
                color="gray.100"
                type="password"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                variant="outline"
                borderColor="gray.700"
                p={2}
                color="gray.100"
                type="password"
              />
            </Stack>
            <Text
              color="indigo.400"
              onPress={() => navigation.navigate("Forgot Password")}
              textAlign="right"
            >
              Forgot password?
            </Text>
            <Button backgroundColor="red.400">Sign up</Button>
            <Text color="gray.300">
              I have an account!{" "}
              <Text
                color="indigo.400"
                onPress={() => navigation.navigate("Login")}
              >
                Login{" "}
              </Text>
            </Text>
            <Divider />
          </Stack>
        </FormControl>
      </VStack>
    </VStack>
  );
}

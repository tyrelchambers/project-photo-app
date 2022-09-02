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
import React from "react";

const Login = ({ navigation }) => {
  return (
    <VStack justifyContent="center" h="full">
      <VStack p="6">
        <Heading color="gray.100" size="2xl">
          Login
        </Heading>
        <Text color="gray.300" fontSize="xl">
          Welcome back to Mezz!
        </Text>
        <FormControl mt="6">
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input variant="outline" borderColor="gray.700" p={2} />
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

            <Button backgroundColor="red.400">Login</Button>
            <Box>
              <Text color="gray.300">
                I don't have an account!{" "}
                <Text
                  color="blue.300"
                  onPress={() => navigation.navigate("Register")}
                >
                  Sign up{" "}
                </Text>
              </Text>
            </Box>
            <Divider
              backgroundColor="gray.700"
              color="gray.700"
              borderColor="gray.700"
            />
          </Stack>
        </FormControl>
      </VStack>
    </VStack>
  );
};

export default Login;

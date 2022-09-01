import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "native-base";

export function Register() {
  return (
    <VStack justifyContent="center" h="full">
      <VStack p="6">
        <Heading color="gray.100" size="2xl">
          Register
        </Heading>
        <Text color="gray.300" fontSize="xl">
          Welcome back to Mezz! Create an account and let's get started!
        </Text>
        <FormControl mt="6">
          <Stack space={5}>
            <Stack>
              <FormControl.Label>Email</FormControl.Label>
              <Input variant="outline" p={2} placeholder="email@example.com" />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input variant="outline" p={2} placeholder="Password" />
            </Stack>
            <Stack>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                variant="outline"
                p={2}
                placeholder="Confirm you password"
              />
            </Stack>
            <Button backgroundColor="red.400">Sign up</Button>
          </Stack>
        </FormControl>
      </VStack>
    </VStack>
  );
}

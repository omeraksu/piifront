import React from "react";

import {
  VStack,
  Input,
  Container,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

function SignUp({ children }) {
  return (
    <Container maxW="xl" centerContent align>
      <VStack mt={32} align="start">
        <Heading mb={4}>Sign Up</Heading>
        <Input variant="filled" placeholder="name" />
        <Input variant="filled" placeholder="surname" />
        <Input variant="filled" placeholder="email" />
        <Input variant="filled" placeholder="password" />
        <Input variant="filled" placeholder="password_validate" />
        <Flex justify="space-between" w="100%">
          <Button colorScheme="pink">Submit</Button>
          <Button colorScheme="pink" variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
}

export default SignUp;

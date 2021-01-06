import React from "react";

import {
  VStack,
  Flex,
  Input,
  Container,
  Heading,
  Button,
  Spacer,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

function Login({ children }) {
  return (
    <Container maxW="xl" centerContent align>
      <VStack mt={32} align="start">
        <Heading mb={4}>Sign In</Heading>
        <Input variant="filled" placeholder="email" />
        <Input variant="filled" placeholder="password" />
        <Flex w="100%" justify="space-between">
          <Button colorScheme="pink">Submit</Button>
          <Button colorScheme="pink" variant="outline">
            <Link href="/">Home</Link>
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
}

export default Login;

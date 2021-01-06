import React from "react";
import { Flex, Spacer, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

function Header() {
  return (
    <header style={{ marginTop: 8, width: "80%" }}>
      <Flex align="center">
        <Box p={2}>
          <Text size={4}>Logo</Text>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="pink" variant="outline" mr={4}>
            <Link href="/login">Login</Link>
          </Button>
          <Button colorScheme="pink" variant="solid">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </Box>
      </Flex>
    </header>
  );
}

export default Header;

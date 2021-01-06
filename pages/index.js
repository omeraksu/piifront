import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import { Button, Text, Heading } from "@chakra-ui/react";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading className={styles.title}>Home Page</Heading>
        <Text>It's look like pii?</Text>
        <Button colorScheme="pink" variant="solid" mt={4}>
          <Link href="/signup">Get Started</Link>
        </Button>
      </Layout>
    </div>
  );
}

export default Home;

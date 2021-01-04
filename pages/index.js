import React, { useRef, useState } from "react";
import Head from "next/head";
import axios from "axios";
import styles from "../styles/Home.module.css";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function Home() {
  const [show, setShow] = useState(false);
  const { handleSubmit, errors, register, formState, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const handleClick = () => setShow(!show);

  function validateName(value) {
    if (!value) {
      return "Name is required";
    } else return true;
  }

  function validateEmail(value) {
    if (!value) {
      return "Email is required";
    }
  }

  async function onSubmit(values) {
    const signupData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    await axios
      .post("http://localhost:5000/api/auth/signup", {
        body: JSON.stringify(signupData),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Welcome boss!</h3>

        <div className={styles.card}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} isRequired id="name">
              {/*<FormLabel htmlFor="name">İsim</FormLabel>*/}
              <Input
                name="name"
                placeholder="İsim"
                ref={register({ validate: validateName })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email} isRequired id="email" mt={2}>
              {/*<FormLabel htmlFor="email">E-mail</FormLabel>*/}
              <Input
                name="email"
                placeholder="E-mail"
                ref={register({
                  validate: validateEmail,
                  pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                })}
              />
              <FormErrorMessage>
                {errors.email && "Mail is required"}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.password}
              isRequired
              id="password"
              mt={2}
            >
              {/*<FormLabel htmlFor="password">Şifre</FormLabel>*/}
              <Input
                name="password"
                type="password"
                placeholder="Şifre"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && <p>{errors.password.message}</p>}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.password}
              isRequired
              id="password_repeat"
              mt={2}
            >
              {/*<FormLabel htmlFor="password">Şifre</FormLabel>*/}
              <Input
                name="password_repeat"
                type="password"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <p>{errors.password_repeat.message}</p>
              )}

              <FormErrorMessage>
                {errors.password_repeat && "The passwords do not match"}
              </FormErrorMessage>
            </FormControl>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={formState.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </form>

          <a href="#">
            <h3>Sign In &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Powered by ?</footer>
    </div>
  );
}

export default Home;

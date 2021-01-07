import React from "react";
import { Container, Box } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

function SignUp({ children }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    await fetch(`${process.env.API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //clear input
    e.target.reset();
  };

  return (
    <Container maxW="xl" centerContent>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)} method="POST" noValidate>
          <input
            name="name"
            type="text"
            placeholder="Name"
            ref={register({ required: true })}
          />
          <input
            name="email"
            type="text"
            placeholder="email"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            ref={register({ required: true })}
          />
          <button type="submit">Sign Up</button>
        </form>
      </Box>
    </Container>
  );
}

export default SignUp;

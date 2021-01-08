import React, { useState } from 'react'
import { Container, Button, Input, Heading, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

function SignUp({ children }) {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data, e) => {
    setLoading(true)
    await fetch('https://piiapi.herokuapp.com/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    //clear input
    e.target.reset()
    setLoading(false)
  }

  return (
    <Container maxW="xl" centerContent>
      <VStack mt={32} spacing={4} align="start">
        <Heading>Sign Up</Heading>
        <form onSubmit={handleSubmit(onSubmit)} method="POST" noValidate>
          <VStack spacing={4} align="start">
            <Input
              name="name"
              type="text"
              placeholder="Name"
              ref={register({ required: true })}
            />
            <Input
              name="email"
              type="text"
              placeholder="email"
              ref={register({
                required: true,
                pattern: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
              })}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              ref={register({ required: true })}
            />
            <Button isLoading={loading} loadingText="..." type="submit">
              Sign Up
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  )
}

export default SignUp

import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { Input } from '../components/Form/Input'


type SignInFormData = {
  email: string
  password:string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("O E-mail é um campo obrigatório").email("E-mail Inválido"),
  password: yup.string().required("A senha é um campo obrigatório")
})

export default function SignIn() {

  const { register, handleSubmit, formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const { errors} = formState
  const handleSignIn:SubmitHandler<SignInFormData> = async (values, event) => {
    event.preventDefault()

    await new Promise (resolve => setTimeout(resolve, 1500))
      console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >

      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
        <Input
            name="email"
            type="email"
            label="email"
            error={errors.email}
            {...register('email')}
        />
        <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password') }
        />
       
        </Stack>


        <Button
          type="submit"
          size="lg"
          mt="6"
          colorScheme="pink"
          isLoading={formState.isSubmitting}
          
        >
          Entrar
        </Button>
       
      </Flex>
    </Flex>
  )
}

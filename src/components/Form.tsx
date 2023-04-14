import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

export function ChakraForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem('people', JSON.stringify(values))
        resolve(true)

        reset()
      }, 3000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Nome</FormLabel>
        <Input
          id="name"
          placeholder="Nome"
          {...register('name', {
            required: 'This is required',
            minLength: {
              value: 4,
              message: 'Deve ter pelo menos 4 caracteres',
            },
          })}
        />

        <FormErrorMessage>
          {!!errors.name && !!errors?.name?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.age} mt={4}>
        <FormLabel htmlFor="age">Idade</FormLabel>
        <Input
          id="age"
          placeholder="Idade"
          {...register('age', {
            required: 'This is required',
            min: { value: 18, message: 'Deve ser maior de 18 anos' },
          })}
        />
        <FormErrorMessage>
          {!!errors.age && !!errors?.age?.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Salvar
      </Button>
    </form>
  )
}

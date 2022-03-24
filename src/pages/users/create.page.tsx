import {
  Box,
  Flex,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";

import { Input, Heading, Layout } from "../../components";

export default function UserCreate() {
  return (
    <Layout>
      <Heading title="Criar usuário" />
      <Divider my="6" borderColor="gray.700" />
      <VStack spacing="8">
        <SimpleGrid minChildWidth={240} spacing={["6", "8"]} width="100%">
          <Input name="name" label="Nome completo" />
          <Input name="email" label="E-mail" type="email" />
        </SimpleGrid>
        <SimpleGrid minChildWidth={240} spacing={["6", "8"]} width="100%">
          <Input name="password" label="Senha" type="password" />
          <Input
            name="password_confirmation"
            label="Confirmação da senha"
            type="password"
          />
        </SimpleGrid>
      </VStack>
      <Flex mt="8" justify="flex-end">
        <HStack>
          <Button colorScheme="whiteAlpha">Cancelar</Button>
          <Button colorScheme="pink">Salvar</Button>
        </HStack>
      </Flex>
    </Layout>
  );
}

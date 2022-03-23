import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";

import { Input } from "../../components";
import { UserLayout } from "./UserLayout";

export default function UserCreate() {
  return (
    <Box>
      <UserLayout>
        <Heading size="lg" fontWeight="normal">
          Criar usuário
        </Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing="8">
          <SimpleGrid minChildWidth={240} spacing="8" width="100%">
            <Input name="name" label="Nome completo" />
            <Input name="email" label="E-mail" type="email" />
          </SimpleGrid>
          <SimpleGrid minChildWidth={240} spacing="8" width="100%">
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
      </UserLayout>
    </Box>
  );
}

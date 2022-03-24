import {
  Box,
  Flex,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Pagination, Heading, Layout } from "../../components";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const EditTableButton = dynamic<EmptyObject>(() =>
  import("../../components/EditTableButton").then(
    (module) => module.EditTableButton
  )
);

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Layout>
        <Flex mb="8" justify="space-between" align="center">
          <Heading title="Usuários" />
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="pink"
            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
          >
            Criar novo
          </Button>
        </Flex>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={["4", "4", "6"]} color="gray.300" width="8">
                <Checkbox colorScheme="pink" />
              </Th>
              <Th>Usuário</Th>
              {isWideVersion && <Th>Data de Cadastro</Th>}
              <Th width="8" />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Giovani Franz</Text>
                  <Text fontSize="sm" color="gray.300">
                    giovanifranz@gfranz
                  </Text>
                </Box>
              </Td>
              {isWideVersion && (
                <Fragment>
                  <Td>04 de janeiro de 2020</Td> <EditTableButton />
                </Fragment>
              )}
            </Tr>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Giovani Franz</Text>
                  <Text fontSize="sm" color="gray.300">
                    giovanifranz@gfranz
                  </Text>
                </Box>
              </Td>
              {isWideVersion && (
                <Fragment>
                  <Td>04 de janeiro de 2020</Td> <EditTableButton />
                </Fragment>
              )}
            </Tr>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="pink" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Giovani Franz</Text>
                  <Text fontSize="sm" color="gray.300">
                    giovanifranz@gfranz
                  </Text>
                </Box>
              </Td>
              {isWideVersion && (
                <Fragment>
                  <Td>04 de janeiro de 2020</Td> <EditTableButton />
                </Fragment>
              )}
            </Tr>
          </Tbody>
        </Table>
        <Pagination />
      </Layout>
    </Box>
  );
}

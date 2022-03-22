import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

function Sidebar() {
  return (
    <Box as="aside" width="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="pink.400">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontSize="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center" color="pink.400">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontSize="medium">
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center" color="pink.400">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontSize="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center" color="pink.400">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontSize="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export { Sidebar };

import { Box, Flex } from "@chakra-ui/react";
import { Header, Sidebar } from "../../components";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function UserLayout({ children }: Props) {
  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          {children}
        </Box>
      </Flex>
    </Box>
  );
}

export { UserLayout };
export type { Props as UserLayoutProps };

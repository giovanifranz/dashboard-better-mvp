import type { ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { Header, Sidebar } from '.'

interface Props {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        {children}
      </Flex>
    </Box>
  )
}

export { Layout }
export type { Props as LayoutProps }

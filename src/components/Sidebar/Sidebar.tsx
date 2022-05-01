import { Box, useBreakpointValue } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import type { DrawerProps } from '.'
import { SidebarNav } from '.'

const Drawer = dynamic<DrawerProps>(() => import('./Drawer').then((module) => module.Drawer))

function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({ base: true, lg: false })

  if (!isDrawerSidebar) {
    return (
      <Box as="aside" width="64" mr="8">
        <SidebarNav />
      </Box>
    )
  }

  return <Drawer isDrawerSidebar={isDrawerSidebar} />
}

export { Sidebar }

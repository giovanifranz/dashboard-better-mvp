import { Fragment } from 'react'
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'

import type { SidebarDrawerContextProps } from '../../context/SidebarDrawerContext'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

import { SidebarNav } from '.'

interface Props {
  isDrawerSidebar?: boolean
}

function Drawer({ isDrawerSidebar }: Props) {
  const { isOpen, onClose } = useSidebarDrawer() as SidebarDrawerContextProps

  return (
    <Fragment>
      {isDrawerSidebar && (
        <ChakraDrawer isOpen={isOpen as boolean} placement="left" onClose={onClose as () => void}>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>Navegação</DrawerHeader>
              <DrawerBody>
                <SidebarNav />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </ChakraDrawer>
      )}
    </Fragment>
  )
}

export { Drawer }
export type { Props as DrawerProps }

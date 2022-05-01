import { RiMenuLine } from 'react-icons/ri'
import { Icon, IconButton } from '@chakra-ui/react'

import type { SidebarDrawerContextProps } from '../../context/SidebarDrawerContext'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'

interface Props {
  showBurguerMenu?: boolean
}

function BurguerMenu({ showBurguerMenu }: Props) {
  const { onOpen } = useSidebarDrawer() as SidebarDrawerContextProps

  if (showBurguerMenu) {
    return null
  }

  return (
    <IconButton
      aria-label="Open navigation"
      icon={<Icon as={RiMenuLine} />}
      fontSize="28"
      variant="unstyled"
      onClick={onOpen}
      mt="2"
      mr="2"
    />
  )
}

export { BurguerMenu }
export type { Props as BurguerMenuProps }

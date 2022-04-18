import { RiPencilLine } from 'react-icons/ri'
import { Button, Icon, Td } from '@chakra-ui/react'

function EditTableButton() {
  return (
    <Td>
      <Button
        as="a"
        size="sm"
        fontSize="sm"
        colorScheme="purple"
        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
      >
        Editar
      </Button>
    </Td>
  )
}

export { EditTableButton }

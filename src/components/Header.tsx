import { Flex, Text } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      maxWidth={1480}
      height="20"
      mt="4"
      px="6"
      mx="auto"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>
    </Flex>
  )
}

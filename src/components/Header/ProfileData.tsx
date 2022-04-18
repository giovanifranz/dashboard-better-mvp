import { Box, Text } from '@chakra-ui/react'

interface Props {
  name: string
  email: string
}

function ProfileData({ name, email }: Props) {
  return (
    <Box mr="4" textAlign="right">
      <Text>{name}</Text>
      <Text color="gray.300" fontSize="small">
        {email}
      </Text>
    </Box>
  )
}

export { ProfileData }
export type { Props as ProfileDataProps }

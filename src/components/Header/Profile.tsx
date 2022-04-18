import { Avatar, Flex } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import type { ProfileDataProps } from '.'

const ProfileData = dynamic<ProfileDataProps>(() =>
  import('./ProfileData').then((module) => module.ProfileData),
)
interface Props {
  showProfileData?: boolean
}

function Profile({ showProfileData = true }: Props) {
  return (
    <Flex align="center">
      {showProfileData && <ProfileData name="Giovani Franz" email="Giovanifranz151@gmail.com" />}
      <Avatar size="md" name="Giovani Franz" src="https://github.com/giovanifranz.png" />
    </Flex>
  )
}

export { Profile }

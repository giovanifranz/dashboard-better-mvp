import { Flex } from "@chakra-ui/react";
import { Logo, NotificationsNav, Profile, SearchBox } from ".";

function Header() {
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
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}

export { Header };

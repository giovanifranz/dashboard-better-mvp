import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo, NotificationsNav, Profile } from ".";
import dynamic from "next/dynamic";

const SearchBox = dynamic<EmptyObject>(() =>
  import("./SearchBox").then((module) => module.SearchBox)
);

function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}

export { Header };

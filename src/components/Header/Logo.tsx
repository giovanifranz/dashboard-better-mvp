import { Text } from "@chakra-ui/react";

function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
      dashgo
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  );
}

export { Logo };
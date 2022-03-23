import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Giovani Franz</Text>
        <Text color="gray.300" fontSize="small">
          Giovanifranz151@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Giovani Franz"
        src="https://github.com/giovanifranz.png"
      />
    </Flex>
  );
}

export { Profile };

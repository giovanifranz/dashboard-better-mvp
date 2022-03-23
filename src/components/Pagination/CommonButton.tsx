import { Button } from "@chakra-ui/react";
import type { ButtonProps } from ".";

function CommonButton({ number }: ButtonProps) {
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{ bg: "gray.500" }}
    >
      {number}
    </Button>
  );
}

export { CommonButton };

import { Button } from "@chakra-ui/react";
import { ButtonProps } from ".";

function CurrentButton({ number }: ButtonProps) {
  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{ bgColor: "pink.500", cursor: "default" }}
    >
      {number}
    </Button>
  );
}

export { CurrentButton };

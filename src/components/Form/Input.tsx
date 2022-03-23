import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface Props extends ChakraInputProps {
  name: string;
  label?: string;
}

function Input({ name, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: "gray.900" }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}

export { Input };
export type { Props as InputProps };

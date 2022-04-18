import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'

interface Props extends ChakraHeadingProps {
  title: string
}

function Heading({ title, ...rest }: Props) {
  return (
    <ChakraHeading size="lg" fontWeight="normal" {...rest}>
      {title}
    </ChakraHeading>
  )
}

export { Heading }
export type { Props as HeadingProps }

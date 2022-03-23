import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import type { ElementType } from "react";

interface Props extends LinkProps {
  icon: ElementType;
  text: string;
}

function NavLink({ icon, text, ...rest }: Props) {
  return (
    <Link display="flex" alignItems="center" /*color="pink.400"*/ {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontSize="medium">
        {text}
      </Text>
    </Link>
  );
}

export { NavLink };
export type { Props as NavLinkProps };

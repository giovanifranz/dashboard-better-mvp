import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import type { ElementType } from "react";

interface props extends LinkProps {
  icon: ElementType;
  text: string;
}

function NavLink({ icon, text, ...rest }: props) {
  return (
    <Link display="flex" alignItems="center" color="pink.400" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontSize="medium">
        {text}
      </Text>
    </Link>
  );
}

export { NavLink };
export type { props as NavLinkProps };

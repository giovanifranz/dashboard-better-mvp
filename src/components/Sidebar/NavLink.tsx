import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import type { ElementType } from "react";
import { ActiveLink } from "../";
interface Props extends LinkProps {
  icon: ElementType;
  text: string;
  href: string;
}

function NavLink({ icon, text, href, ...rest }: Props) {
  return (
    <ActiveLink href={href} passHref>
      <Link display="flex" alignItems="center" /*color="pink.400"*/ {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontSize="medium">
          {text}
        </Text>
      </Link>
    </ActiveLink>
  );
}

export { NavLink };
export type { Props as NavLinkProps };

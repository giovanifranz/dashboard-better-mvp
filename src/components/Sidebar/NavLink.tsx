import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import type { ElementType } from "react";
import NextLink from "next/link";
interface Props extends LinkProps {
  icon: ElementType;
  text: string;
  href: string;
}

function NavLink({ icon, text, href, ...rest }: Props) {
  return (
    <NextLink href={href} passHref>
      <Link display="flex" alignItems="center" /*color="pink.400"*/ {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontSize="medium">
          {text}
        </Text>
      </Link>
    </NextLink>
  );
}

export { NavLink };
export type { Props as NavLinkProps };

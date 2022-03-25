import Link from "next/link";
import type { LinkProps } from "next/link";
import { cloneElement } from "react";
import type { ReactElement } from "react";
import { useRouter } from "next/router";

interface Props extends LinkProps {
  children: ReactElement;
  childMatchExactHref?: boolean;
}

function ActiveLink({ children, childMatchExactHref = false, ...rest }: Props) {
  const { asPath } = useRouter();

  let isActive = false;

  if (childMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.as))
  ) {
    isActive = true;
  }

  return (
    <Link href={rest.href}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
}

export { ActiveLink };
export type { Props as ActiveLinkProps };

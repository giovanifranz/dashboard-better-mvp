import type { ButtonProps } from ".";
import dynamic from "next/dynamic";

const CommonButton = dynamic<ButtonProps>(() =>
  import("./CommonButton").then((module) => module.CommonButton)
);

const CurrentButton = dynamic<ButtonProps>(() =>
  import("./CurrentButton").then((module) => module.CurrentButton)
);

interface Props {
  number: number;
  isCurrent?: boolean;
}

function PaginationItem({ number, isCurrent = false }: Props) {
  return isCurrent ? (
    <CurrentButton number={number} />
  ) : (
    <CommonButton number={number} />
  );
}

export { PaginationItem };
export type { Props as PaginationItemProps };

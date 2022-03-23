import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import { useDisclosure } from "@chakra-ui/react";
import type { UseDisclosureProps } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

type SidebarDrawerContextProps = UseDisclosureProps;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps);

function SidebarDrawerProvider({ children }: Props) {
  const disclosure = useDisclosure();
  const path = useRouter().asPath;

  useEffect(() => {
    disclosure.onClose();
  }, [path]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

const useSidebarDrawer = () => useContext(SidebarDrawerContext);

export { SidebarDrawerProvider, SidebarDrawerContext, useSidebarDrawer };
export type { Props as SidebarDrawerProviderProps, SidebarDrawerContextProps };

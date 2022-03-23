import { Box, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from ".";
import type { DrawerProps } from ".";
import dynamic from "next/dynamic";
import { Fragment } from "react";

const Drawer = dynamic<DrawerProps>(() =>
  import("./Drawer").then((module) => module.Drawer)
);

function Sidebar() {
  const isDrawerSidebar = useBreakpointValue({ base: true, lg: false });
  return (
    <Fragment>
      {isDrawerSidebar ? (
        <Drawer isDrawerSidebar={isDrawerSidebar} />
      ) : (
        <Box as="aside" width="64" mr="8">
          <SidebarNav />
        </Box>
      )}
    </Fragment>
  );
}

export { Sidebar };

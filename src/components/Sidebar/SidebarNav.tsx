import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavSection, NavLink } from ".";

function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} text="Dashboard" />
        <NavLink icon={RiContactsLine} text="Usuários" />
      </NavSection>
      <NavSection title="Automação">
        <NavLink icon={RiInputMethodLine} text="Formulários" />
        <NavLink icon={RiGitMergeLine} text="Automação" />
      </NavSection>
    </Stack>
  );
}

export { SidebarNav };

import { Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavSection } from "./NavSection";

export function SideBarNav(){
  return(
    <Stack spacing="12" align="flex-start">
    <NavSection title="geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
    </NavSection>

    <NavSection title="automação">
        <NavLink icon={RiInputMethodLine} href="/forms">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">
          Automação
        </NavLink>
    </NavSection>
  </Stack>
  )
}
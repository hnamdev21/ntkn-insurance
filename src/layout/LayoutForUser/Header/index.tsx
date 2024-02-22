"use client";

import React from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import { adminPath, headerRoutes, path } from "@/constants/route";
import useLocalStorage from "@/hooks/useLocalStorage";

import styles from "./styles.module.scss";

const roleButtons: { [key: number | string]: React.JSX.Element[] } = {
  null: [
    <Button key="login" as="a" btnVariant="plain" href={path.Login}>
      Login
    </Button>,
    <Button key="register" as="a" btnVariant="primary" href={path.Register}>
      Register
    </Button>,
  ],
  2: [
    <Button key="dashboard" as="a" btnVariant="plain" href={adminPath.Admin}>
      Dashboard
    </Button>,
  ],
  1: [
    <Button key="profile" as="a" btnVariant="plain" href={path.Profile}>
      Profile
    </Button>,
  ],
};

function Header() {
  const [role] = useLocalStorage<number | null>("role", null);

  return (
    <header className={`sticky z-40 top-0 w-full ${styles.header}`}>
      <Container className="flex justify-between items-center py-[1rem]">
        <div className="flex items-center gap-[3.6rem]">
          <Logo hasText />
          <Nav items={headerRoutes} />
        </div>

        <div className="flex items-center gap-[.5rem]">
          {(role && roleButtons[role]) || roleButtons.null}
        </div>
      </Container>
    </header>
  );
}

export default Header;

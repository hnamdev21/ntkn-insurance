import React from "react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import { path, route } from "@/constants/route";

import styles from "./styles.module.scss";

const userRoutes = [route.Home, route.Shop];

function Header() {
  return (
    <header className={`sticky z-40 top-0 w-full ${styles.header}`}>
      <Container className="flex justify-between items-center py-[1rem]">
        <div className="flex items-center gap-[3.6rem]">
          <Logo hasText />
          <Nav items={userRoutes} />
        </div>

        <div className="flex items-center gap-[.5rem]">
          <Button as="a" btnVariant="plain" href={path.Login}>
            Login
          </Button>

          <Button as="a" btnVariant="primary" href={path.Register}>
            Register
          </Button>
        </div>
      </Container>
    </header>
  );
}

export default Header;

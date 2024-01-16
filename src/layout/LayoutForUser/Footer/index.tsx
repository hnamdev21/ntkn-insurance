import React from "react";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Typography from "@/components/Typography";
import { headerRoutes, socialRoutes } from "@/constants/route";

const Footer = () => {
  return (
    <footer className="hidden md:block">
      <Container className="py-[2.4rem] flex px-[8rem]">
        <div className="w-1/4">
          <Logo hasText />
        </div>

        {/* Col */}
        <div className="flex-1 flex">
          <div className="pr-[2.4rem] flex-1">
            <Typography
              tag="h6"
              fontWeight="fw-md"
              textColor="txtClr-primary"
              className="mb-[1.6rem]"
            >
              Product
            </Typography>

            <Nav items={headerRoutes} col />
          </div>

          {/* Col */}
          <div className="pr-[2.4rem] flex-1">
            <Typography
              tag="h6"
              fontWeight="fw-md"
              textColor="txtClr-primary"
              className="mb-[1.6rem]"
            >
              Navigation
            </Typography>

            <Nav items={headerRoutes} col />
          </div>

          {/* Col */}
          <div className="flex-1">
            <Typography
              tag="h6"
              fontWeight="fw-md"
              textColor="txtClr-primary"
              className="mb-[1.6rem]"
            >
              Company
            </Typography>

            <Nav items={headerRoutes} col />
          </div>

          {/* Col */}
          <div className="flex-1">
            <Typography
              tag="h6"
              fontWeight="fw-md"
              textColor="txtClr-primary"
              className="mb-[1.6rem]"
            >
              Social
            </Typography>

            <Nav items={socialRoutes} col />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

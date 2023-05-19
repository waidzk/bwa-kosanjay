import React from "react";
import { useLocation } from "react-router-dom";

import Button from "elements/Button";
import BrandIcon from "parts/iconText";

export default function Header({ isCentered }) {
  const location = useLocation();
  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };

  if (isCentered) {
    return (
      <nav className="flex justify-center items-center mx-28 p-4">
        <BrandIcon />
      </nav>
    );
  }

  return (
    <nav className="flex md:flex-row flex-wrap md:flex-nowrap justify-between items-center xl:mx-28 lg:mx-10 m-0 p-4">
      <div className="brand-icon md:block md:w-auto md:mb-0 flex justify-center mb-2 w-full">
        <BrandIcon />
      </div>
      <div className="menu-link w-full md:w-fit">
        <ul className="flex items-center md:w-full">
          <li className={`link-item${getNavLinkClass("/")}`}>
            <Button
              className="nav-link mx-4"
              isExternal
              type="link"
              href="/"
            >
              Home
            </Button>
          </li>
          <li className={`link-item${getNavLinkClass("/browse-by")}`}>
            <Button
              className="nav-link mx-4"
              isExternal
              type="link"
              href="/browse-by"
            >
              Browse by
            </Button>
          </li>
          <li className={`link-item${getNavLinkClass("/stories")}`}>
            <Button
              className="nav-link mx-4"
              isExternal
              type="link"
              href="/stories"
            >
              Stories
            </Button>
          </li>
          <li className={`link-item${getNavLinkClass("/agents")}`}>
            <Button
              className="nav-link mx-4"
              isExternal
              type="link"
              href="/agents"
            >
              Agents
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

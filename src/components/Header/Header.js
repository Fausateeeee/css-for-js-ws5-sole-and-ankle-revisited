import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS, BREAKPOINTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileNav>
          <UnstyledButton>
            <Icon color={"var(--color-gray-900)"} id="shopping-bag" />
            <VisuallyHidden>Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon color={"var(--color-gray-900)"} id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon color={"var(--color-gray-900)"} id="menu" />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  @media (max-width: ${BREAKPOINTS.tablet}) {
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    padding-left: 16px;
    padding-right: 16px;
  }

  overflow: auto;
`;

const Nav = styled.nav`
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
  display: flex;
  gap: clamp(1rem, 8vw - 4rem, 3rem);
  margin: 0px 48px;
`;

const MobileNav = styled.nav`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    gap: 24px;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    gap: 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  min-width: fit-content;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;

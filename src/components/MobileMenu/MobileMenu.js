import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Side />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <BottomNav>
          <BottomNavLink href="/terms">Terms and Conditions</BottomNavLink>
          <BottomNavLink href="/privacy">Privacy Policy</BottomNavLink>
          <BottomNavLink href="/contact">Contact Us</BottomNavLink>
        </BottomNav>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
`;

const Content = styled(DialogContent)`
  position: fixed;
  right: 0;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  padding-left: 32px;
  padding-bottom: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const NavLink = styled.a`
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  line-height: ${21 / 16}rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const BottomNav = styled.footer`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;

const BottomNavLink = styled.a`
  color: var(--color-gray-700);
  text-decoration: none;
  font-weight: ${WEIGHTS.normal};
  font-size: ${14 / 16}rem;
  line-height: 1rem;
`;

const Side = styled.div`
  flex: 1;
`;
export default MobileMenu;

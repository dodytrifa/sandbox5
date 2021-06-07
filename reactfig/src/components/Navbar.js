import React from 'react';
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink>
        <h4>Logo</h4>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">Tentang Kami
          </NavLink>
          <NavLink to="/outlet">Semua Outlet
          </NavLink>
          <NavLink to="/promo">Promo
          </NavLink>
          <NavLink to="/karier">Karier
          </NavLink>
          <NavLink to="/download">Download App
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}
  
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: .5rem calc(100vw - 1000px);
  z-index: 5;
`

export const NavLink = styled(Link)`
  background: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translated(-100%, 75%);
    font-size: 1.8rem;
  }
`

export default Navbar;
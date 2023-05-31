import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background:#000000 ;
  height: 85px;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  width: 100vw;
  position:  top ;

  padding: 0 10rem;
  z-index: 12;

`;
  
export const NavLink = styled(Link)`
  color: #F6F5F5;
  display: flex;
  align-items: left;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
  align-items: center;
  display: inline-block;

  width: 100%;

  font-size: 18px;
  font-weight: italics;
  cursor: pointer;
  &.active {
    color: "#FFDB58";
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    width: 100%;


    top: 80;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    display: none;
    width: 100%;

  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
  border-radius: 40px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border-color: #000000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
    display: inline-block;

  }
`;
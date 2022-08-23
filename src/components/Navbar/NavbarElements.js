import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #0a192f;
  display: flex;
  justify-content: space-between;
  padding: 0;
  z-index: 10;
`

export const Bars = styled(FaBars)`
  display: none;
  color: #6AF9E2;

  @media all and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: clamp(1px, 1vw, 25px);
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    height: 40px;
    width: auto;

  }
`

export const X = styled(FaTimes)`
    display: none;
    color: #6AF9E2;

    @media all and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 25px;
      right: clamp(1px, 1vw, 25px);
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
      height: 40px;
      width: auto;
      z-index: 2;
}
`

export const NavMenu = styled.div`
  display: flex;
  align-item: center;
  padding-top: 40px;
  padding-right: 40px;

  @media all and (max-width: 768px) {
    opacity: 0;
  }


`


import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoints } from '../../lib/styles/responsive';

const NavItem = styled.nav`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00423b;
  ul {
    display: flex;
    width: 40rem;
    justify-content: space-between;
    font-size: 1.125rem;
    font-weight: bold;
    color: #fff;
    @media screen and (max-width: ${breakpoints.phone}) {
      font-size: 0.875rem;
    }
    li {
      cursor: pointer;
      padding: 0.625rem 0.625rem;
      border-bottom: 0.1875rem solid #00423b;
      &:hover {
        border-bottom: 0.1875rem solid #fff;
      }
    }
  }
`;

interface MenuNavigatorProps {}
const MenuNavigator: React.FC<MenuNavigatorProps> = props => {
  return (
    <NavItem>
      <ul>
        <li>
          <Link to="/">메인</Link>
        </li>
        <li>
          <Link to="/boxoffice">박스오피스</Link>
        </li>
        <li>
          <Link to="/movie">영화정보</Link>
        </li>
        <li>
          <Link to="/company">영화사정보</Link>
        </li>
        <li>
          <Link to="/person">영화인정보</Link>
        </li>
      </ul>
    </NavItem>
  );
};

export default MenuNavigator;

import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItem = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00423b;
  margin-bottom: 20px;
  ul {
    display: flex;
    width: 40rem;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    li {
      cursor: pointer;
      padding: 10px 10px;
      border-bottom: 3px solid #00423b;
      &:hover {
        border-bottom: 3px solid #fff;
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

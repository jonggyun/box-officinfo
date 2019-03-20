import * as React from 'react';
import styled from 'styled-components';

const NavItem = styled.nav`
  height: 6.25rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface MenuNavigatorProps {}
const MenuNavigator: React.FC<MenuNavigatorProps> = props => {
  return <NavItem>여기에 버튼을 뿌리면 된다!!!</NavItem>;
};

export default MenuNavigator;

import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';

import BoxofficeListContainer from '../containers/boxoffice/BoxofficeListContainer';

const BoxofficeContent = styled.section`
  display: flex;
  flex-direction: column;
`;

const SubMenu = styled.ul`
  height: 2.5rem;
  display: flex;
  justify-content: center;
  li {
    margin-top: 0.625rem;
    margin-left: 1.875rem;
    margin-right: 1.875rem;
    text-align: center;
    min-width: 4.375rem;
    font-weight: 800;
    cursor: pointer;
    /* border-bottom: 0.25rem solid #8bc2bb; */
  }
`;

const BoxofficeList = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

interface BoxofficePageProps {}
const BoxofficePage: React.SFC<BoxofficePageProps> = props => {
  const [boxofficeType, setBoxofficeType] = useState('daily');

  return (
    <MainTemplate>
      <MenuNavigator />
      <BoxofficeContent>
        <nav>
          <SubMenu>
            <li onClick={() => setBoxofficeType('daily')}>Daily</li>
            <li onClick={() => setBoxofficeType('weekly')}>Weekly</li>
          </SubMenu>
        </nav>
        <BoxofficeList>
          <BoxofficeListContainer type={boxofficeType} />
        </BoxofficeList>
      </BoxofficeContent>
    </MainTemplate>
  );
};

export default BoxofficePage;

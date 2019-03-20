import * as React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';

import BoxofficeList from '../components/boxoffice/BoxofficeList';

const MainContent = styled.section`
  display: flex;
  justify-content: center;
`;

interface MainPageProps {}
const MainPage: React.SFC<MainPageProps> = props => {
  return (
    <MainTemplate>
      <MenuNavigator />
      <MainContent>
        <BoxofficeList type="daily" />
        <BoxofficeList type="weekly" />
      </MainContent>
    </MainTemplate>
  );
};

export default MainPage;

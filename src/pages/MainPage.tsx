import * as React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';

import BoxofficeList from '../components/boxoffice/BoxofficeList';
import BoxofficeListContainer from '../containers/boxoffice/BoxofficeListContainer';

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
        <BoxofficeListContainer />
        <BoxofficeListContainer />
      </MainContent>
    </MainTemplate>
  );
};

export default MainPage;

import * as React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';
import { breakpoints } from '../lib/styles/responsive';

import BoxofficeListContainer from '../containers/boxoffice/BoxofficeListContainer';

const MainContent = styled.section`
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.phone}) {
    flex-direction: column;
  }
`;

interface MainPageProps {}
const MainPage: React.SFC<MainPageProps> = props => {
  return (
    <MainTemplate>
      <MenuNavigator />
      <MainContent>
        <BoxofficeListContainer type="daily" />
        <BoxofficeListContainer type="weekly" />
      </MainContent>
    </MainTemplate>
  );
};

export default MainPage;

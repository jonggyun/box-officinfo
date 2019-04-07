import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import MainTemplate from '../components/main/MainTemplate';
import MenuNavigator from '../components/common/MenuNavigator';
import PersonContainer from '../containers/person/PersonContainer';
import PersonDetailContainer from '../containers/person/PersonDetailContainer';

const PersonContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1.875rem;
`;
interface MatchParams {
  peopleCd: string;
}

interface PersonPageProp extends RouteComponentProps<MatchParams> {}
const PersonPage: React.SFC<PersonPageProp> = props => {
  const { peopleCd } = props.match.params;
  return (
    <MainTemplate>
      <MenuNavigator />
      <PersonContent>
        {!peopleCd ? (
          <PersonContainer />
        ) : (
          <PersonDetailContainer peopleCd={peopleCd} />
        )}
      </PersonContent>
    </MainTemplate>
  );
};

export default PersonPage;

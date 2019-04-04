import React from 'react';
import styled from 'styled-components';

import { ShowtypeType } from '../../../lib/types/movieInfo';

const Section = styled.section`
  margin-top: 0.8125rem;
  display: flex;
`;

const ShowType = styled.div`
  padding: 3px 10px;
  margin-right: 6px;
  background-color: #00423b;
  color: #fff;
  border-radius: 0.3125rem;
  font-size: 12px;
`;

interface ShowTypesProps {
  showTypes: Array<ShowtypeType>;
}
const ShowTypes: React.SFC<ShowTypesProps> = ({ showTypes }) => (
  <Section>
    {showTypes.map((showType, index) => (
      <ShowType key={index}>{showType.showTypeNm}</ShowType>
    ))}
  </Section>
);

export default ShowTypes;

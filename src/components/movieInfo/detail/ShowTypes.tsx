import React from 'react';
import styled from 'styled-components';

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

interface ShowTypesProps {}
const ShowTypes: React.SFC<ShowTypesProps> = props => (
  <Section>
    <ShowType>2D</ShowType>
    <ShowType>3D</ShowType>
    <ShowType>IMAX 3D</ShowType>
    <ShowType>IMAX 4D</ShowType>
  </Section>
);

export default ShowTypes;

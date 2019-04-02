import React from 'react';
import styled from 'styled-components';

import { movieInfo } from '../../../lib/styles/common';

const Section = styled.section`
  ${movieInfo.section}
`;

const Title = styled.span`
  ${movieInfo.title}
`;

const UnderLine = styled.hr`
  ${movieInfo.underline}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ActorCard = styled.dl`
  width: 7.625rem;
  height: 5rem;
  padding: 0.5625rem;
  border: 1px solid #8bc2bb;
  border-radius: 0.3125rem;
  margin-right: 0.5rem;
  margin-bottom: 0.3125rem;
  box-shadow: 1px 1px #459d93;
`;

const ActorNmKR = styled.dt`
  font-size: 1rem;
  font-weight: 800;
  color: #002c27;
`;

const ActorNmEN = styled.dd`
  font-size: 0.75rem;
  color: #7f8c8d;
`;

const Cast = styled.dd`
  font-size: 12px;
  color: #00423b;
  font-weight: 800;
  margin-top: 5px;
`;

interface ActorsProps {}
const Actors: React.SFC<ActorsProps> = props => (
  <Section>
    <Title>Actors</Title>
    <UnderLine />
    <Wrapper>
      <ActorCard>
        <ActorNmKR>이병헌이병헌이이병헌이병헌이병헌</ActorNmKR>
        <ActorNmEN>LEE Byung-hun</ActorNmEN>
        <Cast>광해/하선</Cast>
      </ActorCard>
      <ActorCard>
        <ActorNmKR>이병헌</ActorNmKR>
        <ActorNmEN>LEE Byung-hun</ActorNmEN>
        <Cast>광해/하선</Cast>
      </ActorCard>
      <ActorCard>
        <ActorNmKR>이병헌</ActorNmKR>
        <ActorNmEN>LEE Byung-hun</ActorNmEN>
        <Cast>광해/하선</Cast>
      </ActorCard>
      <ActorCard>
        <ActorNmKR>이병헌</ActorNmKR>
        <ActorNmEN>LEE Byung-hun</ActorNmEN>
        <Cast>광해/하선</Cast>
      </ActorCard>
      <ActorCard>
        <ActorNmKR>이병헌</ActorNmKR>
        <ActorNmEN>LEE Byung-hun</ActorNmEN>
        <Cast>광해/하선</Cast>
      </ActorCard>
      <ActorCard>
        <ActorNmKR>이병헌</ActorNmKR>
        <ActorNmEN>LEE Byung-hun</ActorNmEN>
        <Cast>광해/하선</Cast>
      </ActorCard>
    </Wrapper>
    {/* <div>more ....</div> */}
  </Section>
);

export default Actors;

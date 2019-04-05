import React from 'react';
import styled from 'styled-components';

import { DirectorType } from '../../../lib/types/movieInfo';

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
`;

const Information = styled.dl`
  padding: 0.125rem 0.625rem 0.625rem 0;
  dt {
    font-size: 1rem;
    font-weight: 800;
  }
  dd {
    font-size: 0.75rem;
    color: #2c3e50;
  }
`;

interface DirectorsProps {
  directors: Array<DirectorType>;
}
const Directors: React.SFC<DirectorsProps> = ({ directors }) => (
  <Section>
    <Title>Directors</Title>
    <UnderLine />
    <Wrapper>
      {directors.map((director, index) => (
        <Information key={index}>
          <dt>{director.peopleNm}</dt>
          <dd>{director.peopleNmEn}</dd>
        </Information>
      ))}
    </Wrapper>
  </Section>
);

export default Directors;

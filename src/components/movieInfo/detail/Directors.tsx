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

interface DirectorsProps {}
const Directors: React.SFC<DirectorsProps> = props => (
  <Section>
    <Title>Directors</Title>
    <UnderLine />
    <Wrapper>
      <Information>
        <dt>추창민</dt>
        <dd>CHOO Chang-min</dd>
      </Information>
      <Information>
        <dt>최창민</dt>
        <dd>CHOI Chang-min</dd>
      </Information>
    </Wrapper>
  </Section>
);

export default Directors;

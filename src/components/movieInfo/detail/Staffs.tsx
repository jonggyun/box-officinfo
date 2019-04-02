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

interface StaffsProps {}
const Staffs: React.SFC<StaffsProps> = props => (
  <Section>
    <Title>Staffs</Title>
    <UnderLine />
    <div>
      <dl>
        <dt>원동연</dt>
        <dl>WON Dong-yeon</dl>
        <dl>음악 믹싱/레코딩</dl>
      </dl>
      <dl>
        <dt>원동연</dt>
        <dl>WON Dong-yeon</dl>
        <dl>음악 믹싱/레코딩</dl>
      </dl>
      <dl>
        <dt>원동연</dt>
        <dl>WON Dong-yeon</dl>
        <dl>음악 믹싱/레코딩</dl>
      </dl>
    </div>
  </Section>
);

export default Staffs;

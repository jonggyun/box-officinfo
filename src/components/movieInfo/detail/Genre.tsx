import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 12px;
  & > span:nth-child(2n-1) {
    color: #00423b;
  }

  & > span:nth-child(2n) {
    color: #5ca9a0;
  }
`;

interface GenreProps {}
const Genre: React.SFC<GenreProps> = props => (
  <Section>
    <span>액션, 어드벤쳐, 스릴러</span>
    <span> / </span>
    <span>180분</span>
    <span> / </span>
    <span>2019.01.01 개봉</span>
  </Section>
);

export default Genre;

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

interface GenreProps {
  genres: Array<{
    genreNm: string;
  }>;
  showTm: number;
  openDt: string;
}
const Genre: React.SFC<GenreProps> = ({ genres, showTm, openDt }) => (
  <Section>
    <span>{genres.map(genre => `${genre.genreNm},`)}</span>
    <span> / </span>
    <span>{showTm}분</span>
    <span> / </span>
    <span>{openDt} 개봉</span>
  </Section>
);

export default Genre;

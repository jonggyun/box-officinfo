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
    <span>
      {genres.map((genre, index) =>
        genres.length - 1 === index ? `${genre.genreNm}` : `${genre.genreNm}, `,
      )}
    </span>
    <span> / </span>
    <span>{showTm}분</span>
    <span> / </span>
    <span>
      {openDt
        ? openDt.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')
        : '정보없음'}{' '}
      개봉
    </span>
  </Section>
);

export default Genre;

import React from 'react';
import styled from 'styled-components';
import DoNotHaveItem from '../common/DoNotHaveItem';

const Keyword = styled.input`
  width: 37.5rem;
  height: 3.125rem;
  box-sizing: border-box;
  border: 0.3125rem solid #00796b;
  font-size: 20px;
  :focus {
    outline: none;
  }
`;

interface MovieInfoListProps {
  keyword: string;
  setKeyword: Function;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  movies: Array<Object> | undefined;
}
const MovieInfoList: React.SFC<MovieInfoListProps> = ({
  keyword,
  setKeyword,
  handleKeyPress,
  movies,
}) => {
  return (
    <>
      <Keyword
        type="text"
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <section>
        {movies && movies.length > 0 ? (
          <div>결과 있지롱</div>
        ) : (
          <DoNotHaveItem />
        )}
      </section>
    </>
  );
};

export default MovieInfoList;

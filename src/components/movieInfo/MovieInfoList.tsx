import React from 'react';
import styled from 'styled-components';

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
}
const MovieInfoList: React.SFC<MovieInfoListProps> = ({
  keyword,
  setKeyword,
  handleKeyPress,
}) => {
  return (
    <Keyword
      type="text"
      value={keyword}
      onChange={e => setKeyword(e.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
};

export default MovieInfoList;

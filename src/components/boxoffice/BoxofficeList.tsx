import * as React from 'react';
import styled from 'styled-components';

const Boxoffice = styled.article`
  /* border: 1px solid black; */
  width: 31.25rem;
  margin: 0 2rem;
`;

const ListTitle = styled.div`
  text-align: center;
  padding: 1.25rem 0;
  font-size: 2rem;
  font-weight: 800;
`;

const MovieList = styled.ul``;

const MovieInfo = styled.li`
  display: flex;
  justify-content: space-between;
  height: 4.375rem;
  border: 1px solid black;

  & > div:nth-child(1) {
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;

    div:first-child {
      font-size: 20px;
    }

    div:last-child {
      font-size: 13px;
    }
  }
  & > div:nth-child(2) {
    font-size: 1.5rem;
  }
  & > div:nth-child(3) {
    text-align: right;
    min-width: 7.5rem;
    font-size: 0.8125rem;
    margin-top: auto;
    margin-bottom: 0;
  }
`;

interface BoxofficeListProps {
  type: string;
}
const BoxofficeList: React.FC<BoxofficeListProps> = ({ type }) => {
  return (
    <Boxoffice>
      <ListTitle>Daily or Weekly</ListTitle>
      <MovieList>
        <MovieInfo>
          <div>
            <div>1</div>
            <div>+ 10</div>
          </div>
          <div>세상에서 제일 긴 영화 이름은 무엇인가 부제까지 포함해서</div>
          <div>
            <div>2010.10.11 개봉</div>
            <div>누적 11,000,000 명</div>
          </div>
        </MovieInfo>
      </MovieList>
    </Boxoffice>
  );
};

export default BoxofficeList;

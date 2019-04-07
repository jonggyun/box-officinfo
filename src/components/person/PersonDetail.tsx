import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PersonWrapper = styled.section`
  width: 37.5rem;
  span {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
`;

const PersonName = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #002c27;
  margin-right: 0.3125rem;
`;

const PersonNameEN = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #178578;
`;

const PersonRole = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const Filmos = styled.div`
  padding: 5px 0;
`;

const CastInfo = styled.div`
  border-bottom: 0.0313rem solid #b9dad6;
  display: flex;
  padding-bottom: 10px;
  font-size: 14px;
  span {
    padding: 0 0.625rem;
  }
`;

const CastYear = styled.span`
  color: #00423b;
`;

const MovieName = styled.span`
  font-weight: 800;
  color: #00423b;
  cursor: pointer;
`;

const Role = styled.span`
  color: #8bc2bb;
  margin-left: auto;
  margin-right: 5px;
`;

interface PersonDetailProps {
  peopleInfo: {
    filmos: Array<{
      movieCd: string;
      movieNm: string;
      moviePartNm: string;
    }>;
    homepages: Array<Object>;
    peopleCd: string;
    peopleNm: string;
    peopleNmEn: string;
    repRoleNm: string;
  };
}
const PersonDetail: React.SFC<PersonDetailProps> = ({ peopleInfo }) => {
  const {
    filmos,
    homepages,
    peopleCd,
    peopleNm,
    peopleNmEn,
    repRoleNm,
  } = peopleInfo;
  return (
    <PersonWrapper>
      <span>
        <PersonName>{peopleNm}</PersonName>
        <PersonNameEN>{peopleNmEn}</PersonNameEN>
      </span>
      <PersonRole>{repRoleNm}</PersonRole>
      <Filmos>
        {filmos.map(film => (
          <CastList
            movieCd={film.movieCd}
            movieNm={film.movieNm}
            moviePartNm={film.moviePartNm}
          />
        ))}
      </Filmos>
    </PersonWrapper>
  );
};

interface CastListProps {
  movieCd: string;
  movieNm: string;
  moviePartNm: string;
}
const CastList: React.SFC<CastListProps> = ({
  movieCd,
  movieNm,
  moviePartNm,
}) => (
  <CastInfo>
    <CastYear>{movieCd.substr(0, 4)}</CastYear>
    <Link to={`/movie/${movieCd}`}>
      <MovieName>{movieNm}</MovieName>
    </Link>
    <Role>{moviePartNm}</Role>
  </CastInfo>
);

export default PersonDetail;

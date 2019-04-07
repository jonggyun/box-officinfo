import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DoNotHaveItem from '../common/DoNotHaveItem';

const Keyword = styled.input`
  width: 37.5rem;
  height: 3.125rem;
  box-sizing: border-box;
  border: 0.3125rem solid #00796b;
  font-size: 1.25rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 1rem;
    text-indent: 0.625rem;
  }
`;

const PeopleSection = styled.section`
  margin-top: 1.25rem;
`;

const PeopleComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 34.375rem;
  border-bottom: 1px solid #b9dad6;
  margin: 1.25rem 0;
  /* padding-bottom: 0.625rem; */
  padding: 0.625rem;
  &:hover {
    box-shadow: 0.0625rem 0.0625rem 0.3125rem 0.0625rem #000;
    border-radius: 0.1875rem;
  }
`;

const PeopleNmInfo = styled.div`
  display: flex;
  align-items: center;
  span:first-child {
    font-size: 1.25rem;
    font-weight: 800;
    color: #00423b;
    margin-right: 0.3125rem;
    &:hover {
      cursor: pointer;
    }
  }
  span:last-child {
    font-size: 0.9375rem;
    color: #95a5a6;
  }
`;

const PeopleRole = styled.span`
  font-size: 0.875rem;
  color: #006458;
`;

const FilmoNames = styled.span`
  font-size: 0.875rem;
  margin-left: auto;
  margin-right: 0;
  color: #003731;
`;

interface PersonListProps {
  keyword: string;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  setKeyword: Function;
  people: Array<any> | undefined;
}
const PersonList: React.SFC<PersonListProps> = ({
  keyword,
  handleKeyPress,
  setKeyword,
  people,
}) => (
  <>
    <Keyword
      type="text"
      value={keyword}
      placeholder="영화인 입력해주세요."
      onChange={e => setKeyword(e.target.value)}
      onKeyPress={handleKeyPress}
    />
    <PeopleSection>
      {people && people.length > 0 ? (
        people.map(person => (
          <PeopleCard
            key={person.peopleCd}
            peopleCd={person.peopleCd}
            peopleNm={person.peopleNm}
            peopleNmEn={person.peopleNmEn}
            repRoleNm={person.repRoleNm}
            filmoNames={person.filmoNames}
          />
        ))
      ) : (
        <DoNotHaveItem />
      )}
    </PeopleSection>
  </>
);

interface PeopleCardProps {
  peopleCd: string;
  peopleNm: string;
  peopleNmEn: string;
  repRoleNm: string;
  filmoNames: string;
}
const PeopleCard: React.FC<PeopleCardProps> = ({
  peopleCd,
  peopleNm,
  peopleNmEn,
  repRoleNm,
  filmoNames,
}) => (
  <PeopleComponent>
    <Link to={`/person/${peopleCd}`}>
      <PeopleNmInfo>
        <span>{peopleNm}</span>
        <span>{peopleNmEn}</span>
      </PeopleNmInfo>
    </Link>
    <PeopleRole>{repRoleNm}</PeopleRole>
    <FilmoNames>{filmoNames.split(/\|/g, 5).join(', ')}</FilmoNames>
  </PeopleComponent>
);

export default PersonList;

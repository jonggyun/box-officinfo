import React, { useState } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../modules/reducers';
import PersonList from '../../components/person/PersonList';
import { getPerson } from '../../modules/person';

interface PersonContainerProps {
  // type: string;
  loading: boolean;
  people: any;
  getPerson: Function;
}

const PersonContainer: React.FC<PersonContainerProps> = ({
  people,
  getPerson,
}) => {
  const [keyword, setKeyword] = useState('');

  const handleOnSubmit = () => {
    getPerson(keyword);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    const { key } = e;

    if (key === 'Enter') {
      handleOnSubmit();
    }
  };

  return (
    <PersonList
      keyword={keyword}
      handleKeyPress={handleKeyPress}
      setKeyword={setKeyword}
      people={people}
    />
  );
};

export default connect(
  (state: RootState, props) => ({
    // type: state.person.type,
    loading: state.person.loading,
    people: state.person.people,
  }),
  { getPerson },
)(PersonContainer);

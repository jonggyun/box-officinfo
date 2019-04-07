import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../modules/reducers';

import PersonDetail from '../../components/person/PersonDetail';
import { getPersonDetail } from '../../modules/person';

interface PersonDetailContainerProps {
  peopleCd: string;
  getPersonDetail: Function;
  peopleInfo:
    | {
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
      }
    | undefined;
}
const PersonDetailContainer: React.SFC<PersonDetailContainerProps> = ({
  peopleCd,
  getPersonDetail,
  peopleInfo,
}) => {
  useEffect(() => {
    getPersonDetail(peopleCd);
  }, [peopleCd]);
  return peopleInfo ? <PersonDetail peopleInfo={peopleInfo} /> : null;
};

export default connect(
  (state: RootState, props) => ({
    peopleInfo: state.person.peopleInfo,
  }),
  { getPersonDetail },
)(PersonDetailContainer);

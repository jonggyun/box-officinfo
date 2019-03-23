import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { format, subDays } from 'date-fns';

import { RootState } from '../../modules/reducers';
import BoxofficeList from '../../components/boxoffice/BoxofficeList';
import { getDaily } from '../../modules/boxoffice';

interface BoxofficeListContainerProps {
  getDaily: Function;
  boxoffice: any;
}
const BoxofficeListContainer: React.FC<BoxofficeListContainerProps> = ({
  getDaily,
  boxoffice,
}) => {
  useEffect(() => {
    getDaily(format(subDays(new Date(), 1), 'YYYYMMDD'));
  }, []);

  return <BoxofficeList type="daily" boxoffice={boxoffice} />;
};

export default connect(
  (state: RootState, props) => ({
    boxoffice: state.boxoffice,
  }),
  { getDaily },
)(BoxofficeListContainer);

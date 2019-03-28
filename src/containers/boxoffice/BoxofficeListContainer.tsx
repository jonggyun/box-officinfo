import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { format, subDays } from 'date-fns';

import { RootState } from '../../modules/reducers';
import BoxofficeList from '../../components/boxoffice/BoxofficeList';
import { getDaily, getWeekly } from '../../modules/boxoffice';
import LoadingSpinner from '../../components/common/LoadingSpinner';

interface BoxofficeListContainerProps {
  loading: boolean;
  getDaily: Function;
  getWeekly: Function;
  daily: any;
  weekly: any;
  type: string;
}
const BoxofficeListContainer: React.FC<BoxofficeListContainerProps> = ({
  loading,
  getDaily,
  getWeekly,
  daily,
  weekly,
  type,
}) => {
  useEffect(() => {
    type === 'daily'
      ? getDaily(format(subDays(new Date(), 1), 'YYYYMMDD'))
      : getWeekly(format(subDays(new Date(), 7), 'YYYYMMDD'));
  }, [type]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <BoxofficeList
          type={type}
          boxoffice={type === 'daily' ? daily : weekly}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState, props) => ({
    loading: state.boxoffice.loading,
    daily: state.boxoffice.daily,
    weekly: state.boxoffice.weekly,
  }),
  { getDaily, getWeekly },
)(BoxofficeListContainer);

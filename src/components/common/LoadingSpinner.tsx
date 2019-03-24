import * as React from 'react';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

interface LoadingSpinnerProps {}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = props => {
  return (
    <Loading>
      <ClipLoader sizeUnit={'px'} size={50} color={'#00796B'} loading={true} />
    </Loading>
  );
};

export default LoadingSpinner;

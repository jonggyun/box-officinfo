import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 1rem;
  font-weight: 800;
  margin-top: 1.25rem;
  color: #00423b;
`;

interface DoNotHaveItemProps {}
const DoNotHaveItem: React.SFC<DoNotHaveItemProps> = props => {
  return <Content>검색결과가 없습니다.</Content>;
};

export default DoNotHaveItem;

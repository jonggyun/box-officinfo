import * as React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  margin-top: 1.25rem;
`;

interface DoNotHaveItemProps {}
const DoNotHaveItem: React.SFC<DoNotHaveItemProps> = props => {
  return <Content>Do Not Have Item!!!</Content>;
};

export default DoNotHaveItem;

import * as React from 'react';
import styled from 'styled-components';

interface MainTemplateProps {}
const MainTemplate: React.SFC<MainTemplateProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainTemplate;

import React from 'react';
import styled from 'styled-components';

import { movieInfo } from '../../../lib/styles/common';

const Section = styled.section`
  ${movieInfo.section}
`;

const Title = styled.span`
  ${movieInfo.title}
`;

const UnderLine = styled.hr`
  ${movieInfo.underline}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CompanyCard = styled.dl`
  padding: 0.3125rem 0.625rem;
  margin-right: 0.625rem;
  margin-bottom: 0.625rem;
  border: 0.0625rem solid #8bc2bb;
  border-radius: 0.3125rem;
  box-shadow: 0.0625rem 0.0625rem #459d93;
  font-size: 0.875rem;
  width: 10.5rem;
`;

const PartNm = styled.dt`
  font-size: 0.625rem;
  color: #003731;
`;

const NameKR = styled.dd`
  font-weight: 800;
  color: #003731;
  padding-top: 0.1875rem;
`;

const NameEN = styled.dd`
  font-size: 0.75rem;
  color: #00796b;
`;

interface CompaniesProps {}
const Companies: React.SFC<CompaniesProps> = props => (
  <Section>
    <Title>Company</Title>
    <UnderLine />
    <Wrapper>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
      <CompanyCard>
        <PartNm>제작사</PartNm>
        <NameKR>리얼라이즈픽쳐스(주)</NameKR>
        <NameEN>Realies Pictures, Inc.</NameEN>
      </CompanyCard>
    </Wrapper>
  </Section>
);

export default Companies;

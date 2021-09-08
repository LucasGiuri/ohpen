import styled from 'styled-components';
import { colors, radius } from '../../constants';

export const SectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  `;
  
  export const SectionContent = styled.div`
  top: calc(50% - 280px);
  margin: 0 auto;
  position: relative;
  width: 500px;
  padding: 30px;
  background: ${colors.white};
  border-radius: ${radius.small};
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 0px 40px 0px;
`;

export const Logo = styled.img`
  width: 130px;
  margin: 0 auto;
`;
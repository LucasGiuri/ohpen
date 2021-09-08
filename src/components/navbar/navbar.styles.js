import styled from 'styled-components';
import { colors, mediaSizes } from '../../constants';

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${colors.white};
  padding: 10px 0px;
  box-shadow: 0 3px 3px rgba(0,0,0,0.1);
`;

export const Greeting = styled.li`
  width: 100%;
  color: ${colors.black};
  border: none;
  font-weight: 600;
  text-decoration: none;

  @media (${mediaSizes.ipad}) {
    display: none;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  padding-left: 60px;

  @media (${mediaSizes.ipad}) {
    padding-left: 20px;
  }
  `;
  
export const NavLink = styled.span`
  color: ${colors.black};
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 60px;
`;

export const LogoAndLinksContainer = styled.div`
  display: flex;
  padding-left: 60px;

  @media (${mediaSizes.ipad}) {
    padding-left: 2%;
    width: 100%;
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding-right: 60px;

  @media (${mediaSizes.ipad}) {
    padding-right: 2%;
  }
`;

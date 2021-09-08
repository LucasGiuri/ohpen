import styled from 'styled-components';
import { colors, radius } from '../../constants';

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: ${radius.small};
  background-color: ${colors.bgGrey};
  &:hover {
    background-color: ${colors.lightGrey};
  }
`;

import styled from 'styled-components';
import { colors, radius } from '../../constants';

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.black};
  box-sizing: border-box;
  outline: 0;
`;

export const InputSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.black};
  box-sizing: border-box;
  outline: 0;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 100;
`;
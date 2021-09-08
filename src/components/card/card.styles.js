import styled from "styled-components";
import { colors, radius } from '../../constants';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border-radius: ${radius.small};
  background-color: ${colors.white};
  box-shadow: 0 3px 3px rgba(0,0,0,0.2);
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 20px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const CardContent = styled.div`
  font-weight: 600;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  width: 42px;
  height: 26px;
  border-radius: ${radius.large};
  background: ${colors.lightGrey};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: ${radius.rounded};
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${colors.white};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: ${radius.large};
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${colors.green};
    &::after {
      content: "";
      display: block;
      border-radius: ${radius.rounded};
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

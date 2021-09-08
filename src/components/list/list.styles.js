import styled from "styled-components";
import { colors, radius } from "../../constants";

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    background-color: ${colors.white};
    border-radius: ${radius.small};
`;

export const ListItem = styled.div`
  padding: 2%;
  font-weight: 600;
`;

import styled from "styled-components";
import { mediaSizes } from "../../constants";

export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 auto;

    @media (${mediaSizes.mobile}) {
      justify-content: center;
    }
`;

export const GridItem = styled.div`
  margin-bottom: 2%;
`;

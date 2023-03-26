import styled from 'styled-components';
import { getRandomHexColor } from '../random-number.js';

export const Item = styled.li`
  background-color: ${getRandomHexColor};
`;

export const SectionStatistics = styled.section`
  box-shadow: 0 0 1em gray;
  width: 300px;
  background-color: white;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  & h2 {
    text-align: center;
  }
  & ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    & li {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-top: 10px;
      padding-bottom: 10px;
      width: 100%;
      flex-basis: calc(100% / 4);
    }
  }
`;

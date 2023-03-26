import styled from 'styled-components';

export const TheadTransaction = styled.thead`
  background-color: #00ced1;
`;

export const TableTransaction = styled.table`
  box-shadow: 0 0 1em gray;
  margin-bottom: 20px;
  width: 300px;
`;

export const TbodyTransaction = styled.tbody`
  text-align: center;
  & tr:nth-child(2n) {
    background-color: #fffafa;
  }
  & tr:nth-child(2n + 1) {
    background-color: #dcdcdc;
  }
`;

export const Transaction = styled.tr`
  color: #000;
`;

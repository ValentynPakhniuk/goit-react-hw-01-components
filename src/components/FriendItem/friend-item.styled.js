import styled from 'styled-components';

export const Item = styled.li`
  width: 300px;
  background-color: white;
  display: flex;
  gap: 10px;
  text-align: center;
  box-shadow: 0 0 1em gray;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  & img {
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 10px;
  }
  & p {
    margin: auto 0;
  }
`;

export const Span = styled.span`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 0;
  margin: auto 0 auto 20px;
  background-color: ${({ isHide }) => (isHide ? 'green' : 'white')};
  text-align: center;
`;

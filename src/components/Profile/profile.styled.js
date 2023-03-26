import styled from 'styled-components';

export const LiContainer = styled.li`
  background-color: rgb(190, 200, 230, 0.2);
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 0 1em gray;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  margin-top: 20px;
  text-align: center;
  img {
    margin-top: 10px;
  }
  li:not(:last-child) {
    border-right: 1px solid gray;
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    & li {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-basis: calc(100% / 3);
      padding-top: 20px;
      padding-bottom: 20px;
      border-top: 1px solid gray;
    }
  }
`;

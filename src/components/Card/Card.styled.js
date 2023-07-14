import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ ishide }) => (ishide ? "blue" : "red")};
  width: 300px;
  &:hover {
    background-color: green;
  }

  h5 {
    color: aquamarine;
  }
`;

export const Photo = styled.img`
  width: 300px;
`;

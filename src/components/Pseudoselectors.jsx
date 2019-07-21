import styled from "styled-components";

export const Thing = styled.button`
  color: blue;

  ::before {
    content: "🚀";
  }

  :hover {
    color: red;
  }
`;

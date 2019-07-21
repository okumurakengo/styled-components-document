import styled from "styled-components";

// Static object
export const Box = styled.div({
  background: "palevioletred",
  height: "50px",
  width: "50px"
});

// Adapting based on props
export const PropsBox = styled.div(props => ({
  background: props.background,
  height: "50px",
  width: "50px"
}));

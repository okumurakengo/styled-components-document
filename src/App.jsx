import React from "react";
import styled from "styled-components";

// Static object
const Box = styled.div({
  background: "palevioletred",
  height: "50px",
  width: "50px"
});

// Adapting based on props
const PropsBox = styled.div(props => ({
  background: props.background,
  height: "50px",
  width: "50px"
}));

const App = () => {
  return (
    <>
      <Box />
      <PropsBox background="blue" />
    </>
  );
};

export default App;

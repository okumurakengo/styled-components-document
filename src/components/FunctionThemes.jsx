import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* theme.mainで枠線とテキストに色を付け */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// ボタンのデフォルトテーマ
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
};

const theme = {
  main: "mediumseagreen"
};

const App = () => {
  return (
    <>
      {/* ThemeProviderを使用していないボタン */}
      <Button>Normal</Button>

      {/* ThemeProviderを使用しているボタン */}
      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </>
  );
};

export default App;

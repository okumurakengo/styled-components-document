import React from "react";
import styled, { ThemeProvider } from "styled-components";

const ButtonStyles = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* theme.mainで枠線とテキストに色を付け */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// ボタンのデフォルトテーマ
ButtonStyles.defaultProps = {
  theme: {
    main: "palevioletred"
  }
};

const theme = {
  main: "mediumseagreen"
};

export const DefaultButton = () => {
  return (
    // ThemeProviderを使用していないボタン
    <ButtonStyles>Normal</ButtonStyles>
  );
};

export const ThemeButton = () => {
  return (
    // ThemeProviderを使用しているボタン
    <ThemeProvider theme={theme}>
      <ButtonStyles>Themed</ButtonStyles>
    </ThemeProvider>
  );
};

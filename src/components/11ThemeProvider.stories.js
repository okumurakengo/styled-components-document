import React from "react";
import { storiesOf } from "@storybook/react";
import { DefaultButton, ThemeButton } from "./ThemeProviderSample";

storiesOf("11 ThemeProvider", module)
  .add("without ThemeProvider", () => <DefaultButton />)
  .add("ThemeProvider", () => <ThemeButton />);

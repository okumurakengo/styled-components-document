import React from "react";
import { storiesOf } from "@storybook/react";
import { Box, PropsBox } from "./StyleObjects";

storiesOf("15 StyleObjects", module)
  .add("Box", () => <Box />)
  .add("PropsBox", () => <PropsBox background="blue" />);

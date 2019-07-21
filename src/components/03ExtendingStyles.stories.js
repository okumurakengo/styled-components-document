import React from "react";
import { storiesOf } from "@storybook/react";
import { Button, TomatoButton } from "./ExtendingStyles";

storiesOf("03 Extending Styles", module)
  .add("Normal", () => <Button>Normal Button</Button>)
  .add("Normal anchor", () => (
    <Button as="a" href="/">
      Link with Button styles
    </Button>
  ))
  .add("TomatoButton", () => (
    <TomatoButton as="a" href="/">
      Link with Tomato Button styles
    </TomatoButton>
  ));

import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./AdaptingBasedOnProps";

storiesOf("02 Adapting based on props", module)
  .add("Normal", () => <Button>Normal</Button>)
  .add("Primary", () => <Button primary>Primary</Button>);

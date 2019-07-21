import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./PassedProps";

storiesOf("05 Passed props", module)
  .add("probablyup", () => <Input defaultValue="@probablyup" type="text" />)
  .add("geelen", () => (
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  ));

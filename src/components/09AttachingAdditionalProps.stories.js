import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./AttachingAdditionalProps";

storiesOf("09 Attaching additional props", module)
  .add("Normal", () => <Input placeholder="A small text input" />)
  .add("Normal size2", () => (
    <Input placeholder="A bigger text input" size="2em" />
  ));

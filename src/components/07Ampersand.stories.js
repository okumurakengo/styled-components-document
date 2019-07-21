import React from "react";
import { storiesOf } from "@storybook/react";
import { Thing } from "./Ampersand";

storiesOf("07 Ampersand", module)
  .add("Thing", () => <Thing>How ya doing?</Thing>)
  .add("Thing something", () => (
    <Thing className="something">The sun is shining...</Thing>
  ));

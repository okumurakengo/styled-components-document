import React from "react";
import { storiesOf } from "@storybook/react";
import { Thing } from "./WithoutTheAmpersand";

storiesOf("08 without the ampersand", module).add("Thing", () => (
  <Thing>
    <label htmlFor="foo-button" className="something">
      Mystery button
    </label>
    <b id="foo-b">What do I do?</b>
  </Thing>
));

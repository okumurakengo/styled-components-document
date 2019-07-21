import React from "react";
import { storiesOf } from "@storybook/react";
import { Link, StyledLink } from "./StylingAnyComponent";

storiesOf("04 Styling any component", module)
  .add("Normal", () => <Link>Unstyled, boring Link</Link>)
  .add("Normal anchor", () => <StyledLink>Styled, exciting Link</StyledLink>);

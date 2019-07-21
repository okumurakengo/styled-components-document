import React, { useRef } from "react";
import styled from "styled-components";

export const InputStyles = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Input = () => {
  const inputRef = useRef(null);
  return <InputStyles ref={inputRef} placeholder="Hover to focus!" />;
};

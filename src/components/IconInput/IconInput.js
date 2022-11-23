import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    "--font-size": 14/16 + "rem",
    "--icon-size": 16/16 + "rem",
    "--border": 1 + "px",
    "--height": 24 + "px",
  },
  large: {
    "--font-size": 18/16 + "rem",
    "--icon-size": 24/16 + "rem",
    "--border": 2 + "px",
    "--height": 36 + "px",
  },
};
const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let styles = STYLES[size];
  styles["--width"] = width;
  return (
    <InputWrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={styles["--icon-size"]}></Icon>
      </IconWrapper>
      <InputTag placeholder={placeholder} />
    </InputWrapper>
  );
};
const InputWrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};

  &:hover{
    color: ${COLORS.black};
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--icon-size) 
`;
const InputTag = styled.input`
  border: 0;
  border-bottom: var(--border) solid ${COLORS.black};
  height: var(--height);
  width: var(--width);
  outline-offset: 4px;
  padding-left: var(--height);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;
export default IconInput;

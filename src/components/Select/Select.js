import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <SelectTag value={value} onChange={onChange}>
        {children}
      </SelectTag>
      <SelectFront>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size="24"></Icon>
        </IconWrapper>
      </SelectFront>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectTag = styled.select`
  z-index: 1;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const SelectFront = styled.div`
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 40px;
  border-radius: 8px;
  font-size: 1rem;
  ${SelectTag}:focus + & {
    outline: 1px solid #212121;
  }
  ${SelectTag}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  width: 24px;
  height: 24px;
`;

export default Select;

/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  large:{
    "--spacing": 4 + "px",
    "--bar-height": 16 + "px",
    "--outer-radius": 8 + "px",
  },
  medium:{
    "--spacing": 0 + "px",
    "--bar-height": 12 + "px",
    "--outer-radius": 4 + "px",
  },
  small:{
    "--spacing": 0 + "px",
    "--bar-height": 8 + "px",
    "--outer-radius": 4 + "px",
  }
}
const ProgressBar = ({ value, size }) => {
  let styles = STYLES[size];
  return (
    <BarWrapper style={styles} role="progressbar" aria-valuemax={100} aria-valuemin={0}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Trimmer>
      <Bar value={value}></Bar>
      </Trimmer>
    </BarWrapper>
  );
};
const BarWrapper = styled.div`
  width: 370px;
  padding: var(--spacing);
  border-radius: var(--outer-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;
const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: ${props => props.value + "%"};
  height: var(--bar-height);
`;
const Trimmer = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;
export default ProgressBar;

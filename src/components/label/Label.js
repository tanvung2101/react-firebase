import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.garyDark};
  font-weight: 600;
  cursor: pointer;
  font-weight: 500;
`;

const Label = ({htmlFor='', children, ...props}) => {
  return <LabelStyles htmlFor={htmlFor}>
    {children}
  </LabelStyles>;
};

export default Label;

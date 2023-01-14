import React from "react";

import { defaultProps } from "./defaultProps";
import { useLogic } from "./useLogic";
import {
  Container,
  StyledLabel,
  LabelWrapper,
  StyledTextField,
  ErrorMessage,
  ErrorMessageWrapper,
} from "./styles";

const Index = ({
  type,
  name,
  label,
  placeHolder,
  defaultValue,
  isHidden,
  isReadOnly,
  isRequired,
  isTouched,
  isDisabled,
  error,
  maxLength,
  isWithRequiredStar,
  onValueChange,
}) => {
  const { value, handleChange } = useLogic({
    type,
    defaultValue,
    maxLength,
    onValueChange,
  });

  return (
    <div>
      {!isHidden && (
        <Container>
          <LabelWrapper>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            {isWithRequiredStar && isRequired && label && (
              <div style={{ color: "red" }}>*</div>
            )}
          </LabelWrapper>
          <StyledTextField
            type={type}
            name={name}
            placeholder={placeHolder}
            value={value}
            error={isTouched && !!error}
            disabled={isDisabled}
            onChange={handleChange}
            InputProps={{
              readOnly: isReadOnly,
            }}
            // inputProps={{
            //   maxLength,
            // }}
            sx={{
              "& legend": { display: "none" },
              "& fieldset": { top: 0 },
            }}
          />
          <ErrorMessageWrapper>
            {isTouched && error && <ErrorMessage>{error}</ErrorMessage>}
          </ErrorMessageWrapper>
        </Container>
      )}
    </div>
  );
};

Index.defaultProps = defaultProps;

export default Index;

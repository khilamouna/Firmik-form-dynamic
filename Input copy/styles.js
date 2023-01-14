import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const LabelWrapper = styled.div`
  display: flex;
`;
export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: black;
  margin-bottom: 5px;
`;

export const StyledTextField = styled(TextField)`
  background-color: white;
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    // height: 55px;
    & fieldset {
      border-radius: 5px;
      border-color: #1d292e;
      border-width: 1px;
    }
    &:hover fieldset {
      border-color: #1d292e;
      border-width: 2px;
    }
    &.Mui-focused fieldset {
      border-color: #1d292e;
    }
  }
`;
export const ErrorMessageWrapper = styled.div`
  margin: 5px 0 8px 0;
  height: 10px;
`;
export const ErrorMessage = styled.span`
  color: red;
`;

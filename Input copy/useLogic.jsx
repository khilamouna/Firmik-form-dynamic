import { useState, useEffect, ChangeEvent, useCallback } from "react";
import { handleValue } from "./helpers/handleValue";

export const useLogic = ({ type, defaultValue, maxLength, onValueChange }) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (event) => {
    setValue(handleValue({ value: event.target.value, type, maxLength }));
  };

  const onValueChangeCallback = useCallback(
    (e) => onValueChange && onValueChange(e),
    [onValueChange]
  );
  useEffect(() => {
    onValueChangeCallback(value);
  }, [value, onValueChangeCallback]);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue, setValue]);

  return { handleChange, value };
};

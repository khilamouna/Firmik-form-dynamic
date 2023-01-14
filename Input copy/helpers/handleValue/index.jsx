export const handleValue = ({ value, type, maxLength }) => {
  if (type === "number") {
    const numberValue = Math.max(0, Number(value))
      .toString()
      .slice(0, maxLength);
    return numberValue;
  }
  return value.toString().slice(0, maxLength) || "";
};

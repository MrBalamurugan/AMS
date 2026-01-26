import { TextField } from "@mui/material";
import type { BaseFieldProps } from "../types";

const CustomNumberField = (props: BaseFieldProps) => {
  return (
    <TextField
      {...props}
      type="number"
      size="small"
      value={props.value ?? ""}
      onChange={(e) => props.onChange?.(Number(e.target.value))}
    />
  );
};

export default CustomNumberField;

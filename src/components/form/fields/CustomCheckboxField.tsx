import { Checkbox, FormControlLabel } from "@mui/material";
import type { BaseFieldProps } from "../types";

const CustomCheckboxField = ({
  label,
  value,
  onChange,
  size = "small",
  disabled,
}: BaseFieldProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={Boolean(value)}
          size={size}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckboxField;

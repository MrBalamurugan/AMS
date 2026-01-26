import { Switch, FormControlLabel } from "@mui/material";
import type { BaseFieldProps } from "../types";

const CustomSwitchField = ({
  label,
  value,
  onChange,
  size = "small",
  disabled,
}: BaseFieldProps) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Switch
          checked={Boolean(value)}
          size={size}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
      }
    />
  );
};

export default CustomSwitchField;

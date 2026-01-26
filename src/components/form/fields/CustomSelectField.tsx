import { TextField, MenuItem } from "@mui/material";
import { useField } from "formik";
import type { BaseFieldProps } from "../types";

interface SelectOption {
  label: string;
  value: string | number;
}

interface CustomSelectFieldProps extends BaseFieldProps {
  options: SelectOption[];
}

const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  name,
  label,
  options,
  size = "small",
  fullWidth = true,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...props}
      select
      label={label}
      size={size}
      fullWidth={fullWidth}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelectField;

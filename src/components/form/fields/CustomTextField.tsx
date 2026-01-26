import { TextField } from "@mui/material";
import { useField } from "formik";
import type { BaseFieldProps } from "../types";

const CustomTextField: React.FC<BaseFieldProps> = ({
  name,
  label,
  size = "small",
  fullWidth = true,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      size={size}
      fullWidth={fullWidth}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default CustomTextField;

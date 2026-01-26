export type BaseFieldProps = {
  name: string;
  label: string;
  value?: any;
  onChange?: (value: any) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
};

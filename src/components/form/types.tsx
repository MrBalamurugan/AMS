export type BaseFieldProps = {
  name: string;
  label: string;
  value?: any;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  onChange?: (value: any) => void;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
};

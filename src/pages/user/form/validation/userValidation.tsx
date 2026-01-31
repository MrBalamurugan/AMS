import * as Yup from "yup";

export const getUserValidationSchema = () => {
  return Yup.object({
    userName: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("User Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    role: Yup.string().required("Role is required"),

    phone: Yup.string()
      .matches(/^[0-9]+$/, "Only numbers allowed")
      .min(7, "Too short")
      .max(15, "Too long")
      .required("Phone is required"),

    status: Yup.mixed<"Active" | "Inactive">()
      .oneOf(["Active", "Inactive"])
      .required("Status is required"),
  });
};

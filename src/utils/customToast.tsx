import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

const baseOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const customToast = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, { ...baseOptions, ...options }),

  error: (message: string, options?: ToastOptions) =>
    toast.error(message, { ...baseOptions, ...options }),

  info: (message: string, options?: ToastOptions) =>
    toast.info(message, { ...baseOptions, ...options }),

  warning: (message: string, options?: ToastOptions) =>
    toast.warn(message, { ...baseOptions, ...options }),
};

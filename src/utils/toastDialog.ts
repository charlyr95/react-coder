import { toast } from "react-toastify";

export async function notifySuccess(
  message: string,
  position:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left" = "top-right",
  autoClose: number = 3000,
  hideProgressBar: boolean = false
): Promise<void> {
  toast.success(message, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

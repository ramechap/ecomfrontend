import { toast } from "react-toastify"

const options = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
}
export const showInfoToast = ({ message }) => {
    toast(message, {
        ...options,
        type: "info",
    },)
}
export const showSuccessToast = ({ message }) => {
    toast(message, {
        ...options,
        type: "success",
    },)
}
export const showErrorToast = ({ message }) => {
    toast(message, {
        ...options,
        type: "error",
    },)
}
export const showWarningToast = ({ message }) => {
    toast(message, {
        ...options,
        type: "warning",
    },)
}
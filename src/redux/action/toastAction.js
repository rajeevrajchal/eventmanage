export const showToast = (message, types) => {
    return {
        type: "SHOW_TOAST",
        message: message,
        types:types
    }
}

export const closeToast = () => {
    return {
        type: "CLOSE_TOAST",
    }
}
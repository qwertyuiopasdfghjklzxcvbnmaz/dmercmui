import { toast } from 'react-toastify';
export const showNotify = (message: string, type: 'error' | 'success' | 'info' | 'warn') => {
    switch (type) {
        case 'error':
            toast.error(message);
            break;
        case 'info':
            toast.info(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        case 'success':
            toast.success(message);
            break;
        default:
            toast(message);
    }
};
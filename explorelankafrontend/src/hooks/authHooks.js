import { message } from "antd";
import { useMutation } from "react-query";

export const useLogin = () => {
    return useMutation(async (values) => {
        const response = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values),
        });
        const data = await response.json();
        if (!response.ok) {
            message.error(data.message);
            throw new Error(data.message);
        } else {
            return data;
        }
        
    });
}

export const useLogout = () => {
    return useMutation(async () => {
        const response = await fetch('http://localhost:4000/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });
        const data = await response.json();
        if (!response.ok) {
            message.error(data.message);
            throw new Error(data.message);
        } else {
            return data;
        }
    });
}
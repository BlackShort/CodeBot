import axios from "axios";
import toast from 'react-hot-toast';
import { API_URL } from "../main.jsx";

export const fetchChats = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/notes/all`, {
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);
            return response.data.notes;
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const getChats = async (noteid) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/notes/${noteid}`, {
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            return response.data.note;
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const Logout = async (setIsAuthenticated) => {
    try {
        const response = await axios.get(`${API_URL}/api/v1/users/logout`, {
            headers: {
                "Content-Type": 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);
            setIsAuthenticated(false);
        }
    } catch (error) {
        toast.error(error.response.data.message);
        setIsAuthenticated(false);
    }
};

export const addNotes = async (noteInfo) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/notes/new`, noteInfo, {
            headers: {
                "Content-Type": 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};

export const deleteNotes = async (noteid) => {
    try {
        const response = await axios.delete(`${API_URL}/api/v1/notes/${noteid}`, {
            headers: {
                "Content-Type": 'application/json',
            },
            withCredentials: true,
        });

        if (response.status >= 200 && response.status < 300) {
            toast.success(response.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';

const useLoginSignup = () => {

    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser } = useAuthContext();
    const navigate = useNavigate()
    console.log("eheh");
    const register = async (userDetails) => {
        const { fullName, email, password, confirmPassword } = userDetails;

        if (!fullName || !email || !password || !confirmPassword) {
            console.log(fullName, email, password, confirmPassword);
            return toast.error("All fields are required");
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        setLoading(true);

        try {
            const res = await axios.post("/api/auth/register", { fullName, email, password, confirmPassword }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });


            const data = await res.data;
            if (data.hasOwnProperty('error')) {
                return toast.error(data.error);
            }

            toast.success("Registration successful!");

            localStorage.setItem("auth", JSON.stringify(data));
            setAuthUser(data);
            navigate("/")

        } catch (error) {
            if (error.response?.data) {
                if (error.response.data.error) {
                    toast.error(error.response.data.error)
                } else {
                    toast.error("Something wents wrong")
                }
            } else {
                toast.error("Something wents wrong")
            }

            console.error("Error in register hook", error.response?.data || error.message || error);
        } finally {
            setLoading(false);
        }
    };

    const login = async (userDetails) => {
        const { email, password } = userDetails;

        if (!email || !password) {
            return toast.error("All fields are required");
        }

        setLoading(true);

        try {
            const res = await axios.post("/api/auth/login", { email, password }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = res.data;
            if (data.error) {
                return toast.error(data.error);
            }

            toast.success("Login successful!");

            localStorage.setItem("auth", JSON.stringify(data));
            setAuthUser(data);
            navigate("/")
        } catch (error) {
            if (error.response?.data) {
                if (error.response.data.error) {
                    toast.error(error.response.data.error)
                } else {
                    toast.error("Something wents wrong")
                }
            } else {
                toast.error("Something wents wrong")
            }

            console.error("Error in register hook", error.response?.data || error.message || error);
        } finally {
            setLoading(false);
        }
    };

    return { register, login, loading };
};

export default useLoginSignup;

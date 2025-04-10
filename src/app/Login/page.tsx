"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../component/Input";
import {
    RegisterFormData,
    LoginFormData,
    registerSchema,
    loginSchema,
} from "./Schema";

const RegisterForm: React.FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const schema = isRegister ? registerSchema : loginSchema;
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<RegisterFormData | LoginFormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: RegisterFormData | LoginFormData) => {
        console.log("Form Data:", data);
        alert(`Form submitted successfully!\n${JSON.stringify(data, null, 2)}`);
    };
    const handleModeSwitch = () => {
        setIsRegister((prev) => !prev);
        reset();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-green-600">
                    {isRegister ? "Register" : "Login"}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    {isRegister && (
                        <Input
                            label="Name"
                            type="text"
                            register={register("username")}
                            error={errors.username?.message}
                        />
                    )}

                    <Input
                        label="Email"
                        type="email"
                        register={register("email")}
                        error={errors.email?.message}
                    />

                    <Input
                        label="Password"
                        type="password"
                        register={register("password")}
                        error={errors.password?.message}
                    />
                    <button
                        type="submit"
                        className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition"
                    >
                        {isRegister ? "Register" : "Login"}
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        {isRegister ? "Already have an account? " : "New to our website? "}
                        <span
                            onClick={handleModeSwitch}
                            className="text-green-500 font-semibold cursor-pointer hover:underline"
                        >
                            {isRegister ? "Switch to Login" : "Switch to Register"}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;

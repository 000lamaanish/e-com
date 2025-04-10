import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label: string;
    type: string;
    register: UseFormRegisterReturn;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, register, error }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">{label}</label>
            <input
                type={type}
                {...register}
                className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}
        `}
                placeholder={`Enter your ${label.toLowerCase()}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default Input;

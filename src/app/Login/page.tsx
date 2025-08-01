"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    RegisterFormData,
    LoginFormData,
    registerSchema,
    loginSchema,
} from "./Schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RegisterForm: React.FC = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const schema = isRegister ? registerSchema : loginSchema;

    const form = useForm<RegisterFormData | LoginFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: RegisterFormData | LoginFormData) => {
        console.log("Form Data:", data);
        toast.success(
            `${isRegister ? "Registered" : "Logged in"} successfully! 🎉`,
            { description: "Data saved successfully." }
        );
    };

    const handleModeSwitch = () => {
        setIsRegister((prev) => !prev);
        form.reset();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="bg-card p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-primary">
                    {isRegister ? "Register" : "Login"}
                </h2>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
                        {isRegister && (
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="••••••••" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full mt-4">
                            {isRegister ? "Register" : "Login"}
                        </Button>
                    </form>
                </Form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                    {isRegister ? "Already have an account? " : "New to our website? "}
                    <span
                        onClick={handleModeSwitch}
                        className="text-primary font-semibold cursor-pointer hover:underline"
                    >
                        {isRegister ? "Switch to Login" : "Switch to Register"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;

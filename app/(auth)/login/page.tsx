"use client";

import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import Image from "next/image";
import { useState } from "react";

type ActiveForm = "login" | "signup";

export default function Login() {
    const [activeForm, setActiveForm] = useState<ActiveForm>("login");
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col gap-12 w-1/5">
                <div className="flex items-center gap-4 justify-center">
                    <div className="w-12 h-12 object-contain">
                        <Image
                            src={"/icon-logo.png"}
                            alt="portal"
                            width={137}
                            height={175}
                        />
                    </div>
                    <p className="font-bold text-4xl mt-1 text-lightNavy">
                        Portal
                    </p>
                </div>
                <div className="bg-zinc-200 p-8 gap-4 flex flex-col rounded-md w-full">
                    <h1 className="text-2xl font-light text-lightNavy">
                        {activeForm == "login" ? "Login" : "Signup"}
                    </h1>
                    {activeForm == "login" ? <LoginForm /> : <SignUpForm />}
                    {activeForm == "login" ? (
                        <button
                            onClick={() => setActiveForm("signup")}
                            className="text-sm self-start text-lightNavy cursor-pointer hover:opacity-75 duration-200"
                        >
                            Click here to sign up
                        </button>
                    ) : (
                        <button
                            onClick={() => setActiveForm("login")}
                            className="text-sm self-start text-lightNavy cursor-pointer hover:opacity-75 duration-200"
                        >
                            Click here to login
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

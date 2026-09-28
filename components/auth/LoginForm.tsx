import { Login, LoginState } from "@/lib/actions/auth";
import { useActionState } from "react";

const initialState: LoginState = {};

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(Login, initialState);
    return (
        <form className="flex flex-col gap-4" action={formAction}>
            <label
                htmlFor="email"
                className="text-sm font-semibold text-lightNavy"
            >
                Email address
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="bg-background w-full font-normal text-foreground p-2 mt-0.5 rounded-md"
                />
                {state.errors?.email && (
                    <p className="text-red-500 font-normal mt-1">
                        {state.errors.email[0]}
                    </p>
                )}
            </label>
            <label
                htmlFor="password"
                className="text-sm font-semibold text-lightNavy"
            >
                Password
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="bg-background w-full font-normal text-foreground rounded p-2 mt-0.5"
                />
                {state.errors?.password && (
                    <p className="text-red-500 font-normal mt-1">
                        {state.errors.password[0]}
                    </p>
                )}
            </label>
            <div className="mt-2">
                <button className="bg-lightNavy text-white font-semibold px-4 py-2 rounded-md text-sm cursor-pointer hover:opacity-75 duration-300">
                    Login
                </button>
            </div>
        </form>
    );
}

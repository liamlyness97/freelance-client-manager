import { register, type RegisterState } from "@/lib/actions/auth";
import { useActionState } from "react";

const initialState: RegisterState = {};

export default function SignUpForm() {
    const [state, formAction, isPending] = useActionState(
        register,
        initialState,
    );

    return (
        <form className="flex flex-col gap-4" action={formAction}>
            <label
                htmlFor="name"
                className="text-sm font-semibold text-lightNavy"
            >
                Full name
                <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    className="bg-background w-full font-normal text-foreground p-2 mt-0.5 rounded-md"
                />
                {state.errors?.name && <p>{state.errors.name[0]}</p>}
            </label>
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
                {state.errors?.email && <p>{state.errors.email[0]}</p>}
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
                {state.errors?.password && <p>{state.errors.password[0]}</p>}
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    className="bg-background w-full font-normal text-foreground rounded p-2 mt-2"
                />
                {state.errors?.confirmPassword && (
                    <p>{state.errors.confirmPassword[0]}</p>
                )}
            </label>
            <div className="mt-2">
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-lightNavy text-white font-semibold px-4 py-2 rounded-md text-sm cursor-pointer hover:opacity-75 duration-300"
                >
                    {isPending ? "Creating account..." : "Create account"}
                </button>
            </div>
            {state.message && <p>{state.message}</p>}
        </form>
    );
}

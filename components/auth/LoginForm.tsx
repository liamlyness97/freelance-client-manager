export default function LoginForm() {
    return (
        <form className="flex flex-col gap-4">
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
            </label>
            <div className="mt-2">
                <button className="bg-lightNavy text-white font-semibold px-4 py-2 rounded-md text-sm cursor-pointer hover:opacity-75 duration-300">
                    Login
                </button>
            </div>
        </form>
    );
}

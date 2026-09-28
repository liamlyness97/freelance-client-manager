import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function TopBar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <div className="w-full bg-white flex justify-between items-center py-4 px-8 border-b border-lightNavy/15">
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search or type a command"
                        className="bg-background  px-4 py-2 placeholder:text-sm placeholder:font-medium rounded"
                    />
                </form>
            </div>
            <div className="flex items-center">
                <div className="flex flex-col text-sm justify-center leading-5">
                    <p className="font-bold text-lightNavy">Client Name</p>

                    {session?.user.name && (
                        <p className="text-xs tracking-wide text-navy opacity-50">
                            {session?.user.name}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

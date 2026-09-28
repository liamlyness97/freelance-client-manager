import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function TopBar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <div className="w-full bg-white flex justify-between items-center py-4 px-8 border-b border-borderColour">
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search or type a command"
                        className="bg-background  px-4 py-2 placeholder:text-sm placeholder:font-medium rounded"
                    />
                </form>
            </div>
            <div>
                {session?.user.name && <p>Logged as: {session?.user.name}</p>}
            </div>
        </div>
    );
}

import { Logout } from "@/lib/actions/auth";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export default async function LogoutButton() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <form action={Logout}>
            <input type="hidden" value={session?.user.id ?? ""} name="id" />
            <button className="cursor-pointer hover:text-lightNavy duration-200 self-start">
                Logout
            </button>
        </form>
    );
}

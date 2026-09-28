import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: LayoutProps<"/">) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session?.user.id) redirect("/dashboard");

    return <>{children}</>;
}

import { auth } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: LayoutProps<"/">) {
    const user = await getCurrentUser();

    if (user) redirect("/dashboard");

    return <>{children}</>;
}

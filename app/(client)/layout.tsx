import Sidebar from "@/components/ui/Sidebar";
import TopBar from "@/components/ui/TopBar";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: LayoutProps<"/">) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user.id) redirect("/login");

    return (
        <div className="flex flex-1 justify-between">
            <Sidebar />
            <main className="flex flex-col w-full">
                <TopBar />
                <div className="p-8">{children}</div>
            </main>
        </div>
    );
}

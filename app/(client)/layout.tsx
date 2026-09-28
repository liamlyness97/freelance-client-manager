import Sidebar from "@/components/ui/Sidebar";
import TopBar from "@/components/ui/TopBar";
import { requireUser } from "@/lib/auth/session";

export default async function DashboardLayout({ children }: LayoutProps<"/">) {
    await requireUser();

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

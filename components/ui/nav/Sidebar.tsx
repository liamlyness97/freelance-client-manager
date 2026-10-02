import Image from "next/image";
import LogoutButton from "@/components/auth/LogoutButton";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Sidebar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <div className="hidden w-1/6 bg-white h-screen shrink-0 lg:flex flex-col gap-12 border-r border-lightNavy/15">
            {/* TODO: Revisit this */}
            <div className="py-6 px-8 flex items-center gap-4">
                <div className="w-8 h-8  object-contain">
                    <Image
                        src={"/icon-logo.png"}
                        alt="portal"
                        width={137}
                        height={175}
                    />
                </div>
                <p className="font-bold text-2xl mt-1 text-lightNavy">Portal</p>
            </div>
            <div className="px-8 text-lg font-medium flex flex-col gap-4">
                <Link
                    href="/dashboard"
                    className="hover:text-lightNavy duration-200 cursor-pointer"
                >
                    Dashboard
                </Link>
                <Link
                    href="/projects"
                    className="hover:text-lightNavy duration-200 cursor-pointer"
                >
                    Projects
                </Link>
                <Link
                    href="/tickets"
                    className="hover:text-lightNavy duration-200 cursor-pointer"
                >
                    Tickets
                </Link>
                <p className="hover:text-lightNavy duration-200 cursor-pointer">
                    Invoices
                </p>
            </div>
            {session?.user.role === "admin" && (
                <div className="px-8 ">
                    <div className="text-lg pt-8 font-medium flex flex-col gap-4 border-t border-lightNavy/15">
                        <Link
                            href={"/clients"}
                            className="hover:text-lightNavy duration-200 cursor-pointer"
                        >
                            Clients
                        </Link>
                    </div>
                </div>
            )}
            <div className="justify-self-end justify-end h-full py-6 text-lg font-medium flex flex-col gap-2 px-8">
                <p>Settings</p>
                <LogoutButton />
            </div>
        </div>
    );
}

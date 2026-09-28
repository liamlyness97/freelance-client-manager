import Image from "next/image";
import LogoutButton from "@/components/auth/LogoutButton";

export default function Sidebar() {
    return (
        <div className="w-1/6 bg-white h-screen shrink-0 flex flex-col gap-12 border-r border-borderColour">
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
                <p className="hover:text-lightNavy duration-200 cursor-pointer">
                    Dashboard
                </p>
                <p className="hover:text-lightNavy duration-200 cursor-pointer">
                    Projects
                </p>
                <p className="hover:text-lightNavy duration-200 cursor-pointer">
                    Tickets
                </p>
                <p className="hover:text-lightNavy duration-200 cursor-pointer">
                    Invoices
                </p>
            </div>
            <div className="justify-self-end justify-end h-full py-6 text-lg font-medium flex flex-col gap-2 px-8">
                <p>Settings</p>
                <LogoutButton />
            </div>
        </div>
    );
}

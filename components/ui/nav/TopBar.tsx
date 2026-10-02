import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import Image from "next/image";
import MobileSidebar from "./MobileSidebar";

export default async function TopBar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="w-full bg-white flex justify-between items-center py-4 px-4 lg:px-8 border-b border-lightNavy/15">
      <div className="w-10 h-10 flex lg:hidden object-contain">
        <Image src={"/icon-logo.png"} alt="portal" width={137} height={175} />
      </div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Search or type a command"
            className="bg-background  px-4 py-2 placeholder:text-sm placeholder:font-medium rounded"
          />
        </form>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="flex flex-col text-sm justify-center leading-5">
          <p className="font-bold text-lightNavy">Client Name</p>

          {session?.user.name && (
            <p className="text-xs tracking-wide text-navy opacity-50">
              {session?.user.name}
            </p>
          )}
        </div>
      </div>
      <MobileSidebar />
    </div>
  );
}

import LogoutButton from "@/components/auth/LogoutButton";
import MobileSidebarInner from "./MobileSidebarInner";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export default async function MobileSidebar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <>
      <MobileSidebarInner session={session}>
        <LogoutButton />
      </MobileSidebarInner>
    </>
  );
}

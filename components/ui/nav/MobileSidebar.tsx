import MobileSidebarInner from "./MobileSidebarInner";

export default function MobileSidebar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white h-screen shrink-0 flex flex-col gap-12 border-r border-lightNavy/15">
      <MobileSidebarInner />
    </div>
  );
}
